import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // One cart per user
      index: true,
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          default: 1,
          min: 1,
        },
      },
    ],

    // Total number of products
    totalItems: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Total MRP
    totalPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Total savings
    totalDiscount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Shipping charge
    shippingCharge: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Final amount customer pays
    finalPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;