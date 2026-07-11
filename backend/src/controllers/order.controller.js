import mongoose from "mongoose";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import Address from "../models/address.model.js"

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id
    }).sort({
      isDefault: -1,
      createdAt: -1,
    });
    return res.status(200).json({
      success: true,
      message: "successfully fetch orders",
      count: orders.length || 0,
      addresses: orders || [],
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch orders.",
    });
  }
}

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate([
      { path: 'items.product', select: 'productName mainImage size price discount' },
      { path: 'address', select: 'name phoneNo addressLine1 addressLine2 landmark city state country pincode' }
    ]);
    if(!order) {
      return res.status(404).json({
        success: false,
        message: 'order not found'
      })
    }
    return res.status(200).json({
      success: true,
      message: "successfully fetch order",
      count: order.length || 0,
      order: order || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch orders.",
    });
  }
}

export const createDraftOrder = async (req, res) => {
  try {
    const { items, source } = req.body;
    
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }
    
    if (!source || !['buy-now', 'cart'].includes(source)) {
      return res.status(400).json({ message: 'Invalid or missing source' });
    }

    
    const productIds = items.map((i) => i.productId);
    const products = await Product.find({ _id: { $in: productIds } }).select('_id productName price discount mainImage size stock');
    
    if (products.length !== productIds.length) {
      return res.status(404).json({ success: false, message: 'One or more products not found' });
    }
    
    const productMap = new Map(products.map((p) => [p._id.toString(), p]));
    
    const orderItems = items.map((item) => {
      const product = productMap.get(item.productId.toString());
      return {
        product: product._id,
        qty: item.quantity,
        price: product.price,
        discount: product.discount
      };
    });
    
    const subtotal = orderItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    
    const totalDiscount = orderItems.reduce(
      (sum, item) => sum + item.discount * item.qty, 0
    )

    
    let shipping = 0
    if (subtotal < 999) {
      shipping = 99
    };
    
    const draftOrder = await Order.create({
      user: req.user._id,
      items: orderItems,
      source,
      status: 'draft',
      pricing: {
        subtotal,
        discount: totalDiscount,
        shipping,
        tax: 0,
        total: subtotal + shipping - totalDiscount,
      },
    });
    
    return res.status(201).json({ order: draftOrder, success: true, message: 'successfully drafted an order!' });

  } catch (error) {
    console.error('createDraftOrder error:', error);
    return res.status(500).json({ sucess: false, message: 'Failed to create draft order' });
  }
};


export const addDraftOrderAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { addressId } = req.body;

    if (!addressId) {
      return res.status(404).json({
        success: false,
        message: 'address not found',
      })
    }

    const address = await Address.findById(addressId);

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'address not found'
      })
    } 


    const order = await Order.findByIdAndUpdate(
      id,
      {
        $set: {
          address: addressId
        }
      }, { new: true }
    )


    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'draft order not found'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'address added to draft order',
      order,
    })

  } catch (error) {
    console.error('addDraftOrderAddress error:', error);
    return res.status(500).json({ success: false, message: 'Failed to add address in draft order' });
  }
}