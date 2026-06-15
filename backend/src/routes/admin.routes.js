import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { allUsers, createProduct } from '../controllers/admin.controller.js';
import upload from '../middlewares/uploadImage.middleware.js';
const adminRouter = Router();


adminRouter.get("/", (req, res) => {
    res.send("Admin Route");
});
/**
 * @name createProductRoute
 * @route POST /aire-bliss/admin/product/create-product
 * @desc Create a new product
 * @access Private
 */

adminRouter.post("/product/create-product", authenticateToken, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "previewImages", maxCount: 5 }
]), createProduct);


/**
 * @name getAllUsers
 * @route GET /aire-bliss/admin/users/all-users
 */
adminRouter.get("/users/all-users", authenticateToken, allUsers)

export default adminRouter;