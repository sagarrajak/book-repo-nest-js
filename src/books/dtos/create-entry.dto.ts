import { Transform, TransformFnParams } from 'class-transformer';
import {
    IsBoolean,
    IsDate,
    IsInt,
    IsString,
    Min
} from 'class-validator';

export class AddBooksDto {
    @IsString()
    title: string;


    @IsString()
    author: string;

    @Transform(({ value }: TransformFnParams) => {
        if (typeof value === 'string') {
            const [day, month, year] = value.split('-').map(Number);
            return new Date(year, month - 1, day);
        }
        return value;
    })
    @IsDate()
    publishedDate?: Date;


    @IsString()
    genre?: string;


    @Transform(({ value }: TransformFnParams) => {
        if (typeof value === 'string') {
           return value.trim().toLowerCase() === 'true' ? true : false
        } 
        return value
    })
    @IsBoolean()
    isInStock: boolean;

    @Transform(val => +val.value)
    @IsInt()
    @Min(1)
    totalValues: number

}
