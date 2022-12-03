import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.DATABASE_URL,
        then: console.log(`Server started on port ${process.env.API_PORT}`),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
