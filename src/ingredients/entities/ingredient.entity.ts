import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"Ingredient"})
export class Ingredient {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    aisle:String

}

