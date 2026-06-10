import express from 'express';
import { loginController, signupController, verifyEmailController } from '../controllers/auth.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
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

/**
 * @name VerifyEmail
 * @route /aire-bliss/auth/verify-email
 * @access public
 */
authRouter.put('/verify-email', authenticateToken, verifyEmailController)


export default authRouter;