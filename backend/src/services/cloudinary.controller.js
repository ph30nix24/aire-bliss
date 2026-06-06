import cloudinary from "cloudinary";
import fs from "fs/promises";

/**
 * @name uploadToCloudinary
 * @desc Uploads a file to Cloudinary and returns the secure URL and public ID. Deletes the local file after upload.
 * @param {string} filePath - The local path of the file to be uploaded.
 * @param {string} folder - The Cloudinary folder where the file will be stored (default: "public/temp").
 * @returns {Promise<{url: string, public_id: string}>} An object containing the secure URL and public ID of the uploaded file.
 */
export const uploadToCloudinary = async (filePath, folder="public/temp") => {
    console.log("Uploading to Cloudinary:", filePath);
    if (!filePath) {
        throw new Error("File path is required for uploading to Cloudinary");
    }
    try {
        const result = await cloudinary.v2.uploader.upload(filePath, {
            folder: folder,
            resource_type: "image",
        });
        await fs.unlink(filePath)

        return {
            url: result.secure_url,
            public_id: result.public_id
        }
    } catch (error) {
        await fs.unlink(filePath);
        throw new Error("Error uploading to Cloudinary: " + error.message);
    }
}