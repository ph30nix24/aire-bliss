import cloudinary from "cloudinary";
import fs from "fs/promises";
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