import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  alternateMobileNumber: {
    type: String
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: String,
  landmark: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: "India"
  },
  pincode: {
    type: String,
    required: true
  },
  addressType: {
    type: String,
    enum: ["Home", "Work", "Other"],
    default: "Home"
  },
  isDefault: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model("Address", addressSchema);