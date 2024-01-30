import { BookEntity } from './src/books/entities/books.enity';
import { DataSource, DataSourceOptions } from 'typeorm';


export const dataSourceObject: DataSourceOptions = {
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
  migrations: [`${__dirname}/src/books/migrations/**/*{.ts,.js}`],
};

export const typeOrmConnectionDataSource = new DataSource(dataSourceObject);


// export default typeOrmConnectionDataSource;