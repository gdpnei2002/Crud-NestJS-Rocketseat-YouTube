import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://JoseNeilson:josenei12@cluster0.7fjojvc.mongodb.net/test'
    ),UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
