import { CreateOrderDto } from 'src/dto/create-order.dto';
import { OrdersService } from 'src/services/orders.service';
export declare class OrdersController {
    private service;
    constructor(service: OrdersService);
    create(createOrderDto: CreateOrderDto, user: {
        id: number;
    }): Promise<{
        id: number;
        user_id: number;
    }>;
    read(user: {
        id: number;
    }): Promise<({
        details: {
            id: number;
            order_id: number;
            product_id: number;
            quantity: number;
        }[];
    } & {
        id: number;
        user_id: number;
    })[]>;
    readOne(user: {
        id: number;
    }, orderId: number): Promise<{
        details: {
            id: number;
            order_id: number;
            product_id: number;
            quantity: number;
        }[];
    } & {
        id: number;
        user_id: number;
    }>;
}
