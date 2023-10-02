import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async read(limit: number, skip: number) {
    return await this.prismaService.product.findMany({
      take: limit,
      skip: skip,
      include: {
        category: true,
      },
    });
  }

  async readOne(id: number) {
    return await this.prismaService.product.findFirst({
      where: { id },
      include: {
        category: true,
      },
    });
  }
}
