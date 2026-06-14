import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },

        productName: {
          type: String,
          required: true
        },

        productImage: {
          type: String,
          required: true
        },

        price: {
          type: Number,
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],

    shippingAddress: {
      fullName: {
        type: String,
        required: true
      },

      phoneNumber: {
        type: String,
        required: true
      },

      addressLine1: {
        type: String,
        required: true
      },

      addressLine2: {
        type: String
      },

      city: {
        type: String,
        required: true
      },

      state: {
        type: String,
        required: true
      },

      postalCode: {
        type: String,
        required: true
      },

      country: {
        type: String,
        default: "India"
      }
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "RAZORPAY", "UPI"],
      required: true
    },

    paymentInfo: {
      paymentId: String,
      orderId: String,
      signature: String
    },

    itemsPrice: {
      type: Number,
      required: true
    },

    shippingPrice: {
      type: Number,
      default: 0
    },

    taxPrice: {
      type: Number,
      default: 0
    },

    totalPrice: {
      type: Number,
      required: true
    },

    isPaid: {
      type: Boolean,
      default: false
    },

    paidAt: Date,

    orderStatus: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Processing",
        "Shipped",
        "Out For Delivery",
        "Delivered",
        "Cancelled"
      ],
      default: "Pending"
    },

    deliveredAt: Date
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;