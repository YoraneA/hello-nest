import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = ['Alice', 'Bob', 'Charlie'];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  create(dto: CreateUserDto) {
    this.users.push(dto.name);

    return this.users;
  }
}
