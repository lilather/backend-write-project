import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(),
  MongooseModule.forRoot("mongodb+srv://lilather:King1234@cluster0.4s6lq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
