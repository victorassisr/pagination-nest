import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category{

    @PrimaryGeneratedColumn({type: 'int'})
    idCategory: number;

    @Column({length: 50})
    name: string;

    @ManyToMany(type => Product, product => product.categories)
    products: Product[];
}