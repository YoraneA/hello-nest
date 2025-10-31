import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.repository.save(createUserDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.repository
      .preload({ id, ...updateUserDto })
      .then((updatedUser) => {
        if (!updatedUser) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }

        return this.repository.save(updatedUser);
      });
  }
}
