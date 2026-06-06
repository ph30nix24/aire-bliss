import sharp from 'sharp';
import path from 'path';
import fs from 'fs';


/**
 * @name uploadImage
 * @desc Uploads an image, converts it to WebP format if necessary, and saves it to a temporary directory. Returns the path of the uploaded image.
 * @param {Object} image - The image file object containing the buffer and mimetype.
 * @param {string} name - The name to be used for the uploaded image file.
 * @return {Promise<string>} The path of the uploaded image file.
 * @throws Will throw an error if there is an issue processing the image.
 */
export const uploadImage = async (image, name) => {
    try {
        if (image.mimetype === 'image/webp') {
            const imagePath = `main-image-${name}.webp`;
            const outputPath = path.join(
                process.cwd(),
                'public/temp',
                imagePath
            );

            await sharp(image.buffer)
                .toFile(outputPath);

            
            return outputPath; // Return the path of the uploaded WebP image
        }
        const imagePath = `main-image-${name}.webp`;
        const outputPath = path.join(
            process.cwd(),
            'public/temp',
            imagePath
        );

        await sharp(image.buffer)
            .webp({ quality: 80 })
            .toFile(outputPath);

        return outputPath; // Return the path of the converted WebP image
    }
    catch (error) {
        console.error('Error processing image:', error);
        throw new Error('Failed to process image');
    }
}