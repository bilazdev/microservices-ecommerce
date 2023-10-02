import { PrismaService } from './prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    read(limit: number, skip: number): Promise<({
        category: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        title: string;
        image: string;
        images: string;
        description: string;
        price: number;
        quantity: number;
        short_desc: string;
        cat_id: number;
    })[]>;
    readOne(id: number): Promise<{
        category: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        title: string;
        image: string;
        images: string;
        description: string;
        price: number;
        quantity: number;
        short_desc: string;
        cat_id: number;
    }>;
}
