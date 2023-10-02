import { PrismaService } from './prisma.service';
import { UpdateUserDto } from 'src/dto/update-user.dto';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<{
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
