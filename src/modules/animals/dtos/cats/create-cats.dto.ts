import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Animals } from '../../infra/entities/mongodb/animals.entity';

export class CreateCatDTO extends Animals {
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

  @IsString()
  @IsNotEmpty()
  coatColor: string;
}
