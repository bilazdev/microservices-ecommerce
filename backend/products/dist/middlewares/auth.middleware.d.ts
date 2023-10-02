import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/services/auth.service';
export declare class AuthMiddleware implements NestMiddleware {
    private authService;
    constructor(authService: AuthService);
    use(req: Request, _res: Response, next: NextFunction): Promise<void>;
}
