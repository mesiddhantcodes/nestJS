import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2002',
      database: 'postgres',
      synchronize: true,


    }),
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
