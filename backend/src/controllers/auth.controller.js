import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { optGenater } from '../utils/otpGenerater.js';


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

        const { password: userPassword, ...safeUser } = user._doc;

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
                user: safeUser
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

    await user.save();

    // creating token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    const { password: userPassword, verificationOTP: userOtp, verificationOTPExpires: userVerificationOTPExpires,  ...safeUser } = user._doc;

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

export { loginController, signupController }