import express from 'express';
import { changePassword, loginController, signupController, verifyEmailController } from '../controllers/auth.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
const authRouter = express.Router();

/**
 * @name    loginRoute
 * @route   /aire-bliss/auth/login
 * @access  public
 */
authRouter.post("/login", loginController)


/**
 * @name    SignUpRoute
 * @route   /aire-bliss/auth/signup
 * @access  public
 */
authRouter.post("/signup", signupController)

/**
 * @name    VerifyEmail
 * @route   /aire-bliss/auth/verify-email
 * @access  public
 */
authRouter.put('/verify-email', authenticateToken, verifyEmailController)

/**
 * @name    changePassword
 * @route   PUT /aire-bliss/auth/change-password
 * @access  private
 * @body
 * {
 *   currentPassword: string,
 *   newPassword: string,
 * }
 */

authRouter.put('/change-password', authenticateToken, changePassword)

/**
 * @name    logout
 * @route   POST /aire-bliss/auth/logout
 * @desc    Logout the authenticated user
 * @access private
 */


export default authRouter;