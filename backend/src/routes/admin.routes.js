import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { createProduct } from '../controllers/admin.controller.js';
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

adminRouter.post("/product/create-product", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "previewImages", maxCount: 5 }
]), createProduct);

export default adminRouter;