import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        default: "Aire Bliss",
        trim: true
    },
    mainImage: {
        type: String,
        required: true
    },
    previewImages: [
        {
            type: String
        }
    ],
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["perfume", "room-fragrance"],
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "unisex"],
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },

    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            score: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            }
        }
    ]
});