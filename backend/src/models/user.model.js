import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  dateOfBirth: {
    type: Date,
    default: null,
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: null,
  },
  
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
  lastLogin: {
    type: Date,
    default: null,
  },
}, { timestamps: true, })

const User = mongoose.model("user", userSchema);

export default User;