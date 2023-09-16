import mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  nameofProduct: String,
  details: Object,
  price: Number,
  quantity: Number,
  createdAt: Date,
});
