import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductSchema } from '../schema/product.schema';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  detail: string;

  @Prop()
  imageUrl: string;

  @Prop()
  sellerId: string;
}

export const ProductModel = SchemaFactory.createForClass(Product);
