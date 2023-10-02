import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import * as sha256 from 'sha256';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async generateAccessToken(user: User) {
    return await this.jwtService.signAsync({ id: user.id });
  }

  async getUserFromToken(token: string) {
    try {
      const payload: { id: number } | null =
        await this.jwtService.verifyAsync(token);

      const user = await this.prismaService.user.findFirst({
        where: { id: payload.id },
      });

      return user;
    } catch (e) {
      return null;
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: loginDto.email,
        password: sha256.x2(loginDto.password),
      },
    });

    if (user) return { user, token: await this.generateAccessToken(user) };
    else
      throw new UnauthorizedException({ message: 'Wronge email or password' });
  }

  async register(registerDto: RegisterDto) {
    try {
      return await this.prismaService.user.create({
        data: {
          email: registerDto.email,
          fname: registerDto.fname,
          password: sha256.x2(registerDto.password),
          lname: registerDto.lname,
          username: registerDto.username,
          photoUrl: '',
        },
      });
    } catch (e) {
      throw new BadRequestException({ message: 'User already existed' });
    }
  }
}
