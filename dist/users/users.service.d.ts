import { User } from './entity/user.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    remove(id: number): Promise<DeleteResult>;
}
