import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books/services/books.service';
import { BooksController } from './books/controllers/books.controller';
import { BookEntity } from './books/entities/books.enity';
import { dataSourceObject } from 'datasource';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceObject
    }),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
