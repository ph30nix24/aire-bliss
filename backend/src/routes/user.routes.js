import { Router } from "express";
import { getUserProfile, updateProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const userRouter = Router();


/**
 * @name userRoute
 * @route /aire-bliss/user/
 * @access private
 */
userRouter.get("/", authenticateToken, getUserProfile);


/**
 * @name    updateProfile
 * @desc    Update authenticated user's profile
 * @route   PUT /aire-bliss/user/
 * @access  Private
 */

userRouter.put("/", authenticateToken, updateProfile);




export default userRouter;