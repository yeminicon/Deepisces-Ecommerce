import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderData: any) {
    console.log(orderData);
    return this.orderService.createOrder(orderData);
  }
  @Get()
  async getAllOrders(@Body() id: string) {
    return this.orderService.getAllOrders();
  }
}
