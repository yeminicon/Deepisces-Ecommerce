// src/products/products.controller.ts
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBookDto } from 'src/book/dto/create-book.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() productData: any) {
    console.log(productData);
     return this.productsService.createProduct(productData);
  }

  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() productData: any) {
    return this.productsService.updateProduct(id, productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
