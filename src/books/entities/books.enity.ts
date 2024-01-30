import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'books'})
@Index(['author', 'genre', 'publishedDate'])
@Index(['author'])
@Index(['genre'])
@Index(['publishedDate'])
@Index(['author', 'genre'])
@Index(['genre', 'publishedDate'])
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
