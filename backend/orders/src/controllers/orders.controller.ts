import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DAuth } from 'src/decorators/auth.decorator';
import { DUser } from 'src/decorators/user-injector.decorator';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @DAuth()
  @Post()
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @DUser() user: { id: number },
  ) {
    return await this.service.create(createOrderDto, user.id);
  }

  @DAuth()
  @Get()
  async read(@DUser() user: { id: number }) {
    return await this.service.read(user.id);
  }

  @DAuth()
  @Get(':orderId')
  async readOne(
    @DUser() user: { id: number },
    @Param('orderId', ParseIntPipe) orderId: number,
  ) {
    return await this.service.readOne(user.id, orderId);
  }
}
