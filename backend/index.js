import app from "./src/app.js";
import { configDotenv } from "dotenv";
import connectDB from "./src/db/index.js";

configDotenv({
    path: "./.env"
});

const PORT = process.env.PORT || 4000

connectDB()
    .then( async () => {
        await app.listen(PORT, () => {
            console.log("server is running on ", PORT)
        })
    })
