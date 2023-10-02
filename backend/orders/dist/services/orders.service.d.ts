import { PrismaService } from './prisma.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto, userId: number): Promise<{
        id: number;
        user_id: number;
    }>;
    read(userId: number): Promise<({
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
    readOne(userId: number, orderId: number): Promise<{
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
