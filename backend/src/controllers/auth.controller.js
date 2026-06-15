import User from '../models/user.model.js'
import Address from "../models/address.model.js"
import Cart from '../models/cart.model.js'
import Order from '../models/order.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { optGenater } from '../utils/otpGenerater.js';
import { sendOTPemail } from '../services/email.services.js';
import Wishlist from '../models/wishList.model.js'

/**
 * @name loginController
 * @desc handle login functions fetch user and check wheather its verifed user or not
 * @req email, password
 * @returns 
 */


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        if (!email || !password) {
            return res.status(403).json({ message: "Missing fields All fields are required." })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const { password: userPassword, verificationOTP: userOtp, verificationOTPExpires: userVerificationOTPExpires, ...safeUser } = user._doc;
        user.lastLogin = Date.now();

        let cartLength = 0;
        const cart = await Cart.findOne({
            user: user._id
        })
        if (cart) {
            cartLength = cart.products.length
        }
        const wishlist = await Wishlist.findOne({
            user: user._id
        }).populate("products.product");
        const addresses = await Address.find({
            user: user._id
        });
        const orders = await Order.find({
            user: user._id
        })

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: true, // REQUIRED for cross-site
                sameSite: "None",
            })
            .json({
                message: "login successful",
                user: safeUser,
                cartLength: cartLength,
                wishlist,
                addresses,
                orders,
            })
    } catch (e) {
        return res.status(500).json({
            message: `login failed ${e.message}`
        })
    }
}

const signupController = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)
    if (!name || !email || !password) {
        return res.status(403).json({ message: "Missing fields All fields are required." })
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "user already exists" })
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role: "user"
    })

    const otp = optGenater();

    // saving otp
    user.verificationOTP = otp
    user.verificationOTPExpires = Date.now() + 10 * 60 * 1000;
    user.lastLogin = Date.now();


    await user.save();



    // creating token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    const { password: userPassword, verificationOTP: userOtp, verificationOTPExpires: userVerificationOTPExpires, ...safeUser } = user._doc;

    await sendOTPemail(user.email, otp);

    return res
        .status(200)
        .cookie("token", token, {
            httpOnly: true,
            secure: true, // REQUIRED for cross-site
            sameSite: "None",
        })
        .json({
            message: "register successful",
            user: safeUser
        })
}

const verifyEmailController = async (req, res) => {
    try {
        const otp = req.body.code
        const user = await User.findOne(req.user._id).select("+verificationOTP +verificationOTPExpires -password")

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (user.verificationOTP !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }
        if (user.verificationOTPExpires < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "OTP expired",
            });
        }

        user.isVerified = true;
        user.verificationOTP = undefined;
        user.verificationOTPExpires = undefined;

        await user.save();
        return res.status(200).json({
            success: true,
            message: 'email verified sucessfully'
        })
    }
    catch (e) {
        console.log("error while verifying", e.message)
        return res.status(500).json({
            success: false,
            message: 'internal error'
        })
    }
}
export { loginController, signupController, verifyEmailController }