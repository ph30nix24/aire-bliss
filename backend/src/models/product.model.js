import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
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
    brand: {
        type: String,
        default: "Aire Bliss",
        trim: true
    },
    category: {
        type: String,
        enum: ["perfume", "room-fragrance"],
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "unisex", null],
        default: null
    },
    price: {
        type: Number,
        required: true,
        min: 100
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    sku: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },
    size: {
        type: String,
        required: true
    },
    fragranceNotes: {
        type: [String],
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    featured : {
        type: Boolean,
        default: false
    },
    bestseller : {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ]
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

export default Product;