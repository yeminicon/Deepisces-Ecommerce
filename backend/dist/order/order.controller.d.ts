import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(orderData: any): Promise<import("./model/order.model").Order>;
    getAllOrders(id: string): Promise<import("./model/order.model").Order[]>;
}
