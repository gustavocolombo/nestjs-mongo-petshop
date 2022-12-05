import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UsersSchema } from './infra/entities/mongodb/users.entity';
import { UserController } from './infra/http/controllers/user.controller';
import { UsersService } from './infra/services/mongodb/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
