import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'books'})
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  publishedDate: Date;

  @Column({ nullable: true })
  genre: string;

  @Column({nullable: false})
  isInStock: boolean;

  @Column({nullable: false,  type: 'smallint'})
  totalValues: number
}
