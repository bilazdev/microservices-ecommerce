import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async getUserFromToken(token: string) {
    await lastValueFrom(
      this.httpService.post('http://users-backend:3000/auth/verify-token', {
        token,
      }),
    );
  }
}
