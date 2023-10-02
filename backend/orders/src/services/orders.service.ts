import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto, userId: number) {
    return await this.prismaService.order.create({
      data: {
        user_id: userId,
        details: {
          createMany: {
            data: createOrderDto.cart.products.map((cartProduct) => ({
              product_id: cartProduct.id,
              quantity: cartProduct.quantity,
            })),
          },
        },
      },
    });
  }

  async read(userId: number) {
    return await this.prismaService.order.findMany({
      where: { user_id: userId },
      include: { details: true },
    });
  }

  async readOne(userId: number, orderId: number) {
    return await this.prismaService.order.findFirst({
      where: { user_id: userId, id: orderId },
      include: { details: true },
    });
  }
}
