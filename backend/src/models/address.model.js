import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobileNumber: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: "Invalid mobile number",
      },
    },

    alternateMobileNumber: {
      type: String,
      default: "",
      validate: {
        validator: (v) => !v || /^[0-9]{10}$/.test(v),
        message: "Invalid alternate mobile number",
      },
    },

    addressLine1: {
      type: String,
      required: true,
      trim: true,
    },

    addressLine2: {
      type: String,
      default: "",
      trim: true,
    },

    landmark: {
      type: String,
      default: "",
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      default: "India",
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[1-9][0-9]{5}$/.test(v),
        message: "Invalid pincode",
      },
    },

    addressType: {
      type: String,
      enum: ["home", "work", "other"],
      default: "home",
    },

    label: {
      type: String,
      default: "",
      trim: true,
      maxlength: 30,
    },

    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
addressSchema.index({ user: 1 });
addressSchema.index({ user: 1, isDefault: 1 });

const Address = mongoose.model("Address", addressSchema);

export default Address;