import { Body, Controller, Get, Put } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from 'src/services/users.service';
import { User } from '@prisma/client';
import { DUser } from 'src/decorators/user-injector.decorator';
import { DAuth } from 'src/decorators/auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('')
  async readAll() {
    return await this.service.readAll();
  }

  @DAuth()
  @Put()
  async updateUser(@Body() updateUserDto: UpdateUserDto, @DUser() user: User) {
    return await this.service.updateUser(user.id, updateUserDto);
  }
}
