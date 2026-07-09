import "./src/loadEnv.js"; 

import connectDB from "./src/db/index.js";
import cloudinary from "cloudinary";


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

import app from "./src/app.js";

const PORT = process.env.PORT || 4000

connectDB()
    .then( async () => {
        await app.listen(PORT, () => {
            console.log("server is running on ", PORT)
        })
    })
