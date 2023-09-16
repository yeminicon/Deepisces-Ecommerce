import { Order } from './model/order.model';
import { Model } from 'mongoose';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(orderData: any): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
    updateOrder(id: string, productData: any): Promise<Order>;
    deleteOrder(id: string, orderData: any): Promise<Order>;
}
