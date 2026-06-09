import { Router } from "express";
import { getUserProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const userRouter = Router();


/**
 * @name userRoute
 * @route /aire-bliss/user/get-user
 * @access private
 */
userRouter.get("/get-user", authenticateToken, getUserProfile);


export default userRouter;