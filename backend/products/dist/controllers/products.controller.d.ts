import { ProductsService } from 'src/services/products.service';
export declare class ProductsController {
    private readonly service;
    constructor(service: ProductsService);
    read(limit: number, page: number): Promise<({
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
