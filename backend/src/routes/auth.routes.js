import express from 'express';
import { loginController, signupController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

/**
 * @name loginRoute
 * @route /aire-bliss/auth/login
 * @access public
 */
authRouter.post("/login", loginController)


/**
 * @name SignUpRoute
 * @route /aire-bliss/auth/signup
 * @access public
 */
authRouter.post("/signup", signupController)



export default authRouter;