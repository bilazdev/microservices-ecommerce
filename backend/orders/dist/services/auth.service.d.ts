import { HttpService } from '@nestjs/axios';
export declare class AuthService {
    private httpService;
    constructor(httpService: HttpService);
    getUserFromToken(token: string): Promise<any>;
}
