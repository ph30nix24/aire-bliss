import mongoose from "mongoose";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const createDraftOrder = async (req, res) => {
  try {
    const { items, source } = req.body;
 
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
 
    if (!source || !['buy-now', 'cart'].includes(source)) {
      return res.status(400).json({ message: 'Invalid or missing source' });
    }
 
    // fetch real product data so we snapshot server-verified prices,
    // never trust price if the frontend happened to send one
    const productIds = items.map((i) => i.product);
    const products = await Product.find({ _id: { $in: productIds } });
 
    if (products.length !== productIds.length) {
      return res.status(404).json({ message: 'One or more products not found' });
    }
 
    const productMap = new Map(products.map((p) => [p._id.toString(), p]));
 
    const orderItems = items.map((item) => {
      const product = productMap.get(item.product.toString());
      return {
        product: product._id,
        qty: item.qty,
        price: product.price,
      };
    });
 
    const subtotal = orderItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
 
    const draftOrder = await Order.create({
      user: req.user._id,
      items: orderItems,
      source,
      status: 'draft',
      pricing: {
        subtotal,
        shipping: 0,
        tax: 0,
        total: subtotal,
      },
    });
 
    return res.status(201).json({ order: draftOrder });
  } catch (error) {
    console.error('createDraftOrder error:', error);
    return res.status(500).json({ message: 'Failed to create draft order' });
  }
};