import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

export class CartProductDto {
  @IsNumber()
  id: number;

  @IsNumber()
  quantity: number;
}

export class CartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartProductDto)
  products: CartProductDto[];
}

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => CartDto)
  cart: CartDto;
}
