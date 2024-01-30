import { MigrationInterface, QueryRunner, getManager } from 'typeorm';
import { BookEntity } from '../entities/books.enity';

export class CreateBooks1706604546440 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const insertQuery = `
    INSERT INTO books (title, author, publishedDate, genre, isInStock, totalValues) VALUES
    ('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10 00:00:00', 'Fiction', 1, 100),
    ('To Kill a Mockingbird', 'Harper Lee', '1960-07-11 00:00:00', 'Classics', 1, 120),
    ('1984', 'George Orwell', '1949-06-08 00:00:00', 'Dystopian', 1, 80),
    ('Pride and Prejudice', 'Jane Austen', '1813-01-28 00:00:00', 'Romance', 1, 150),
    ('The Hobbit', 'J.R.R. Tolkien', '1937-09-21 00:00:00', 'Fantasy', 1, 90);
  `;

    queryRunner.query(insertQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
