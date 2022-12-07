import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDTO {
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

  @IsString()
  @IsOptional()
  coatColor?: string;
}
