import { Injectable } from '@nestjs/common';
import { SearchCriteriaDto } from '../dtos/find-all.dto';
import { DataSource, QueryBuilder } from 'typeorm';
import { BookEntity } from '../entities/books.enity';
import { CustumHttpError } from '../Errors/CustumError';
import { AddBooksDto } from '../dtos/create-entry.dto';

@Injectable()
export class BooksService {
  constructor(private dataSource: DataSource) {}

  async getBooks(dto: SearchCriteriaDto) {
    try {
      const {
        author,
        endDate,
        genre,
        page,
        size,
        sortOrder,
        startDate,
        title,
      } = dto;

      const repository = await this.dataSource.getRepository(BookEntity);
      const queryBuilder = repository.createQueryBuilder('books');
      if (author) {
        queryBuilder.where('books.author ILIKE :author', { author: `%${author}%` });
      }
      console.log(queryBuilder.getQuery())
      if (genre) {
        queryBuilder.where('books.genre ILIKE :genre', {genre: `%${genre}%` });
      }
      if (title) {
        queryBuilder.where('books.title like :title', { title: `%${title}%` });
      }

      if (startDate && endDate) {
        queryBuilder.andWhere(
          'books.publishedDate BETWEEN :startDate AND :endDate',
          { startDate, endDate },
        );
      }

      if (sortOrder) {
        const order =
          sortOrder === 'author' ||
          sortOrder === 'publishedDate'
            ? sortOrder
            : 'title';
        queryBuilder.orderBy(`books.${order}`, 'ASC');
      }
      console.log(queryBuilder.getQuery())
      const [result, total] = await queryBuilder
        .skip((page - 1) * size)
        .take(size)
        .getManyAndCount();

      return { result, total };
    } catch (err) {
      throw new CustumHttpError(
        err.message || 'something went wrong, please try again!',
        500,
      );
    }
  }

  async postBook(dto: AddBooksDto) {
    try {
      const repository = await this.dataSource.getRepository(BookEntity);
      const result = await repository.createQueryBuilder('book').insert()
        .into(BookEntity)
        .values({
          ...dto
        })
        .execute()
      return result.generatedMaps.length > 0 ? {id: result.generatedMaps[0].id} : {};
    } catch(err) {
      throw new CustumHttpError(
        err.message || 'Unable to add book, something went wrong!',
        500,
      );
    }
  }
}
