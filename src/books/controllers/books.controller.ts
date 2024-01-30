import { Body, Controller, Get, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { SearchCriteriaDto } from '../dtos/find-all.dto';
import { BooksService } from '../services/books.service';
import { AddBooksDto } from '../dtos/create-entry.dto';

@Controller('v1/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll(
    @Query() dto: SearchCriteriaDto,
  ) {
    const data = await this.booksService.getBooks(dto);
    return data;
  }

  @Post()
  async addBooks(@Body() books: AddBooksDto) {
    console.log(books);
    return this.booksService.postBook(books);
  }
}
