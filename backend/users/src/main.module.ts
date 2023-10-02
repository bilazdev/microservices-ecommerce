import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PrismaService } from './services/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.jwtSecret || 's!@#SAASD!@#',
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, PrismaService, AuthService],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
