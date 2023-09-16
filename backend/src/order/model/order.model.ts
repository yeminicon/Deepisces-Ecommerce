import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OrderSchema } from '../schema/order.schema';
import { Detail, DetailSchema } from '../schema/details.schema';

@Schema()
export class Order extends Document {
  @Prop()
  name: string;

  @Prop({ type: DetailSchema, required: true })
  details: Detail[];

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const OrderModel = SchemaFactory.createForClass(Order);
