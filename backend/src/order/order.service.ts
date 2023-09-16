import { Injectable } from '@nestjs/common';
import { Order } from './model/order.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(orderData: any): Promise<Order> {
    const createOrder = new this.orderModel({
      ...orderData,
    });

    return createOrder.save();
    // send a success message to the memember email
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }
  async getOrderById(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }
  async updateOrder(id: string, productData: any): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id).exec();
  }
  async deleteOrder(id: string, orderData: any): Promise<Order> {
    return this.orderModel.findByIdAndRemove(id);
  }
}
