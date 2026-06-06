import Product from '../models/product.model.js';
import { uploadImage } from './imageUpload.controller.js';
import { uploadToCloudinary } from '../services/cloudinary.controller.js'
/**
 * @name createProduct
 * @route POST /aire-bliss/admin/product/create-product
 * @desc Create a new product
 * @access Private
 */
export const createProduct = async (req, res) => {
    try {
        const { productName, brand, category, gender, price, discountPrice, stock, size, fragranceNotes, shortDescription, longDescription, featured, bestSeller } = req.body;
        console.log("1")
        let sku = req.body.sku;
        console.log("2")
        if (!productName || !category || !price || !stock || !size || !fragranceNotes || !shortDescription || !longDescription) {
            return res.status(400).json({ message: "Product name and category are required" });
        }


        if (!sku) {
            let nextNumber = 1;
            const lastProduct = await Product.findOne().sort({ createdAt: -1 }).select('sku');
            if (lastProduct) {
                nextNumber = parseInt(lastProduct.sku.split('-')[1]) + 1;
            }
            console.log(nextNumber)

            sku = `AB-${String(nextNumber).padStart(6, '0')}`;
            console.log(sku)
        }


        const notes = fragranceNotes.split(" ");

        // Upload main image to Cloudinary
        const mainImageURL = await uploadImage(req.files.image[0], sku);
        const uploadedMainImageURL = await uploadToCloudinary(mainImageURL, "public/temp");
        console.log(uploadedMainImageURL)


        // Upload preview images to Cloudinary
        const previewImageURLs = [];
        const previewImageFiles = req.files.previewImages;
        if (previewImageFiles) {
            for (const file of previewImageFiles) {
                const previewImageURL = await uploadImage(file, `${sku}-preview`);
                const uploadedPreviewImageURL = await uploadToCloudinary(previewImageURL, "public/temp");
                previewImageURLs.push(uploadedPreviewImageURL.url);
            }
        }

        const newProduct = new Product({
            productName,
            mainImage: uploadedMainImageURL.url,
            previewImages: previewImageURLs,
            brand,
            category,
            gender,
            price,
            discount: discountPrice,
            stock,
            sku,
            size,
            fragranceNotes: notes,
            shortDescription,
            longDescription,
            featured,
            bestSeller
        })

        await newProduct.save();
        console.log("created succesfully")
        return res.status(201).json({
            success: true,
            message: "product successfully created"
        })
    }
    catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Failed to create product", error: error.message });
    }
}


