import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product{

    @PrimaryGeneratedColumn({type: 'int'})
    idProduct: number;

    @Column({length: 50})
    name: string;

    @ManyToMany(type => Category, category => category.products)
    @JoinTable({
        name: "product_category",
        joinColumns: [{ name: "idProduct" }],
        inverseJoinColumns: [{ name: "idCategory" }]
      })
    categories: Category[];
}