import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    items: {
      type: [orderItemSchema],
      required: true,
      validate: (v) => Array.isArray(v) && v.length > 0,
    },

    // where this order originated — useful for analytics later
    source: {
      type: String,
      enum: ['buy-now', 'cart'],
      required: true,
    },

    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      default: null,
    },

    paymentMethod: {
      type: String,
      enum: ['card', 'upi', 'cod', 'netbanking'],
      default: null,
    },

    pricing: {
      subtotal: { type: Number, default: 0 },
      shipping: { type: Number, default: 0 },
      tax: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },

    status: {
      type: String,
      enum: ['draft', 'pending_payment', 'paid', 'cancelled'],
      default: 'draft',
    },

  
    paymentDetails: {
      gateway: { type: String }, // e.g. 'razorpay', 'stripe'
      transactionId: { type: String },
      paidAt: { type: Date },
    },
  },
  { timestamps: true }
);


orderSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 86400,
    partialFilterExpression: { status: 'draft' },
  }
);

// helpful for "get user's real orders" queries elsewhere in the app
orderSchema.index({ user: 1, status: 1 });

const Order = mongoose.model('Order', orderSchema);

export default Order;