import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}
}
