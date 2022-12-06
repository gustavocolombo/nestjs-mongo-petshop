import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './modules/animals/animals.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.DATABASE_URL,
        retryAttempts: 10,
        then: console.log(`Server started on port ${process.env.API_PORT}`),
      }),
    }),
    UsersModule,
    AnimalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
