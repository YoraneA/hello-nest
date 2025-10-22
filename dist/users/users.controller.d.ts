import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { DeleteResult } from 'typeorm';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    remove(id: string): Promise<DeleteResult>;
}
