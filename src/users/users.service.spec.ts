import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', () => {
    expect(service.findAll()).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should return a user by id', () => {
    expect(service.findOne(0)).toEqual('Alice');
  });

  it('should create a user', () => {
    expect(service.create({ name: 'Yorane' })).toContain('Yorane');
  });
});
