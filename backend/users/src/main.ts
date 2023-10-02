import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MainModule } from './main.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: '*' });
  await app.listen(3000);
}

bootstrap();
