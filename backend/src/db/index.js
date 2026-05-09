import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);  // force Node to use Google DNS
dns.setDefaultResultOrder("ipv4first"); 

const connectDB = async () => {
    console.log(process.env.MONGOOSE_URI)
    try {
        const res = await mongoose.connect(`${process.env.MONGOOSE_URI}`);
        console.log(`MongoDB Connected: ${res.connection.host}`);
    } catch(e) {
        console.log("error while connecting to db", e.message);
    }
}

export default connectDB