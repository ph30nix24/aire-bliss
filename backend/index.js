import app from "./src/app.js";
import { configDotenv } from "dotenv";
import connectDB from "./src/db/index.js";
import cloudinary from "cloudinary";

configDotenv({
    path: "./.env"
});

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const PORT = process.env.PORT || 4000

connectDB()
    .then( async () => {
        await app.listen(PORT, () => {
            console.log("server is running on ", PORT)
        })
    })
