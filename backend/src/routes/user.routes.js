import { Router } from "express";

const userRouter = Router();


/**
 * @name userRoute
 * @route /aire-bliss/profile/:id
 * @access private
 */
userRouter.get("/", (req, res) => {
    res.send("User");
})

export default userRouter;