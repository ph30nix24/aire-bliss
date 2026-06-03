import { Router } from "express";

const userRouter = Router();


/**
 * @name userRoute
 * @route /aire-bliss/user-profile/
 * @access private
 */
userRouter.get("/", getUserProfile);


export default userRouter;