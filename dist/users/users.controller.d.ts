import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): string[];
    findOne(id: string): string;
    create(dto: CreateUserDto): string[];
}
