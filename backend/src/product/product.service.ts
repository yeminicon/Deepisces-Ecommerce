// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './models/product.model';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryConfig } from './cloudinary/cloudinary.config';
import { CreateBookDto } from 'src/book/dto/create-book.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {
    cloudinary.config(CloudinaryConfig); // Initialize Cloudinary with the configuration
  }

  async createProduct(productData: any): Promise<Product> {
    const createdProduct = new this.productModel({
      ...productData,
    });

    return createdProduct.save();
  }
  getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProductById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, productData: any): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productData, { new: true });
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
}
