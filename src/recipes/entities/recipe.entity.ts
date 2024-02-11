import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";

@Entity({name:"recipe"})
export class Recipe {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    type:string;
    
    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients1:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients2:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients3:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients4:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients5:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients6:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients7:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients8:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients9:Ingredient

    @ManyToOne(() =>Ingredient, (ingredient) => ingredient.name)
    ingredients10:Ingredient

    @Column()
    instructions:string;
}
