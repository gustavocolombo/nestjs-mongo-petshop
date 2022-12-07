import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Animals,
  AnimalsSchema,
} from './infra/entities/mongodb/animals.entity';
import { Birds, BirdsSchema } from './infra/entities/mongodb/birds.entity';
import { Cats, CatsSchema } from './infra/entities/mongodb/cats.entity';
import { Dogs, DogsSchema } from './infra/entities/mongodb/dogs.entity';
import { CatsController } from './infra/http/controllers/cats.controller';
import { DogsController } from './infra/http/controllers/dogs.controller';
import { CatsService } from './infra/services/mongodb/cats.service';
import { DogsService } from './infra/services/mongodb/dogs.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Animals.name, schema: AnimalsSchema },
      { name: Dogs.name, schema: DogsSchema },
      { name: Cats.name, schema: CatsSchema },
      { name: Birds.name, schema: BirdsSchema },
    ]),
  ],
  providers: [DogsService, CatsService],
  controllers: [DogsController, CatsController],
})
export class AnimalsModule {}
