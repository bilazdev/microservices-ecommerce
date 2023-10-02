import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { AuthService } from './services/auth.service';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { HttpModule } from '@nestjs/axios';
import { ProductsService } from './services/products.service';
import { CateogriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController, CateogriesController],
  providers: [ProductsService, PrismaService, CategoriesService, AuthService],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
