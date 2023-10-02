export declare class CartProductDto {
    id: number;
    quantity: number;
}
export declare class CartDto {
    products: CartProductDto[];
}
export declare class CreateOrderDto {
    cart: CartDto;
}
