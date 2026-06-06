import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

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