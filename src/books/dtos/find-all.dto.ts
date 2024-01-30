import { ParseIntPipe } from '@nestjs/common';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsString,
  IsDate,
  IsOptional,
  IsIn,
  IsInt,
  Min,
} from 'class-validator';

export class SearchCriteriaDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      const [day, month, year] = value.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return value;
  })
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      const [day, month, year] = value.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return value;
  })
  @IsDate()
  endDate?: Date;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsIn(['title', 'author', 'publishedDate'])
  sortOrder?: 'title' | 'author' | 'publishedDate';

  
  @Transform(val => +val.value)
  @IsInt()
  @Min(1)
  page?: number;


  @IsInt()
  @Transform(val => +val.value)
  @Min(1)
  size?: number;
}
