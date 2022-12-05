import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  firstname?: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNumber()
  @IsOptional()
  age?: number;
}
