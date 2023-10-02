import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get('')
  async read(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return await this.service.read(limit, page * limit);
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.readOne(id);
  }
}
