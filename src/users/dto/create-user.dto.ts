import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(4)
  password: string;

  @Type(() => Number)
  @IsNumber()
  age: number;
}
