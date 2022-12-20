import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Animals } from '../../infra/entities/mongodb/animals.entity';

export class CreateBirdDTO extends Animals {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  specie: string;

  @IsNumber()
  @IsNotEmpty()
  paws?: number;

  @IsString()
  @IsNotEmpty()
  race: string;

  @IsNumber()
  @IsOptional()
  wings?: number;
}
