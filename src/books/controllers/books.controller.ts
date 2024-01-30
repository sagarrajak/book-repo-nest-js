import { Controller, Get, Query } from '@nestjs/common';
import { SearchCriteriaDto } from '../dtos/find-all.dto';

@Controller('v1/books')
export class BooksController {

    @Get()
    async findAll(@Query() dto: SearchCriteriaDto) {

    }
}
