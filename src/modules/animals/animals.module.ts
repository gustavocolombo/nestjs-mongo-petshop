import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Animals,
  AnimalsSchema,
} from './infra/entities/mongodb/animals.entity';
import { Dogs, DogsSchema } from './infra/entities/mongodb/dogs.entity';
import { DogsController } from './infra/http/controllers/dogs.controller';
import { DogsService } from './infra/services/mongodb/dogs.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Animals.name, schema: AnimalsSchema },
      { name: Dogs.name, schema: DogsSchema },
    ]),
  ],
  providers: [DogsService],
  controllers: [DogsController],
})
export class AnimalsModule {}
