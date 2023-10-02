import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    const user = await this.authService.getUserFromToken(token);
    req['user'] = user;
    next();
  }
}
