import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from 'src/services/users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    readAll(): Promise<{
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
    }[]>;
    updateUser(updateUserDto: UpdateUserDto, user: User): Promise<{
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
}
