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
    @IsDate()
    startDate?: Date;
  
    @IsOptional()
    @IsDate()
    endDate?: Date;
  
    @IsOptional()
    @IsString()
    genre?: string;
  
    @IsOptional()
    @IsIn(['title', 'author', 'publishedDate'])
    sortOrder?: string;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    page?: number;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    size?: number;
  }
  