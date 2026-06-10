import mongoose, { Schema } from "mongoose";

const blackListSchema = new Schema({
    token : {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: '1d' } // Automatically remove expired tokens after 1 day
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const BlackList = mongoose.model("BlackList", blackListSchema);

export default BlackList;