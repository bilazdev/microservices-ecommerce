import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('verify-token')
  async verifyToken(@Body('token') token: string) {
    return await this.service.getUserFromToken(token);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.service.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.service.login(loginDto);
  }
}
