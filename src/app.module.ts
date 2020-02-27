import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { ConfigModule } from '@nestjs/config';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Module({
  imports: [
    EasyconfigModule.register({}),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE_NAME,
    entities: [
      Product,
      Category
    ],
    synchronize: true,
    logger: 'advanced-console',
    logging: 'all',
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
