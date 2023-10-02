import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import { AuthService } from 'src/services/auth.service';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    verifyToken(token: string): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        fname: string;
        lname: string;
        age: number;
        role: number;
        photoUrl: string;
        type: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        fname: string;
        lname: string;
        age: number;
        role: number;
        photoUrl: string;
        type: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: {
            id: number;
            username: string;
            password: string;
            email: string;
            fname: string;
            lname: string;
            age: number;
            role: number;
            photoUrl: string;
            type: string;
        };
        token: string;
    }>;
}
