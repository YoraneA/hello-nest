import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  name: string;
}
