import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cartItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },

      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationOTP: {
    type: String,
    select: false
  },

  verificationOTPExpires: {
    type: Date,
    select: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
}, { timestamps: true, })

const User = mongoose.model("user", userSchema);

export default User;