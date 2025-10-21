import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Alice', 'Bob', 'Charlie'];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }
}
