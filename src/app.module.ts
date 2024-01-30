import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books/services/books.service';
import { BooksController } from './books/controllers/books.controller';
import { BookEntity } from './books/entitys/books.enity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sagar',
      password: 'sagar123',
      database: 'booksdb',
      entities: [
        BookEntity
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
