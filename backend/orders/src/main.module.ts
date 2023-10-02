import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { AuthService } from './services/auth.service';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { HttpModule } from '@nestjs/axios';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [PrismaService, OrdersService, AuthService],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
