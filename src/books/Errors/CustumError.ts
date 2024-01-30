import { HttpException, HttpStatus } from '@nestjs/common';

export class CustumHttpError extends HttpException {
  name: string;

  constructor(
    public message: string,
    status: HttpStatus,
  ) {
    super(message, status);
    this.name = 'BooksError';
  }
}
