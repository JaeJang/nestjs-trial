import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Movie {

    @PrimaryGeneratedColumn() id: number;
    @Column("text") title: string;
    @Column("text") year: number;
    @Column("text", { array: true }) genres: string[];
}