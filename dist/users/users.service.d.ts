import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private users;
    findAll(): string[];
    findOne(id: number): string;
    create(dto: CreateUserDto): string[];
}
