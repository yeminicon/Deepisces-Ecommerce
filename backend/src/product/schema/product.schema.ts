import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  detail: String,
  imageUrl: String,
  sellerId: String,
});
