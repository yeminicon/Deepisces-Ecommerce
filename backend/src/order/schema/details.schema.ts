import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Detail {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;
}

export type DetailDocument = Detail & Document;
export const DetailSchema = SchemaFactory.createForClass(Detail);
