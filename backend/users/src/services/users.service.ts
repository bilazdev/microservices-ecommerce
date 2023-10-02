import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import * as sha256 from 'sha256';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async readAll() {
    return await this.prismaService.user.findMany();
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        email: updateUserDto.email,
        fname: updateUserDto.fname,
        lname: updateUserDto.lname,
        password: sha256(updateUserDto.password),
      },
    });
  }
}
