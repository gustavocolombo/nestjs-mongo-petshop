import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBirdDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  specie?: string;

  @IsNumber()
  @IsOptional()
  paws?: number;

  @IsString()
  @IsOptional()
  race?: string;

  @IsNumber()
  @IsOptional()
  wings?: number;
}
