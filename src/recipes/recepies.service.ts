import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipes } from './dto/create-recipe.dto';
import { UpdateRecipesDto } from './dto/updtate-recipe.dto';


const matin="breakfast";
const midi="lunch";
const soir="dinner"
const timeToEat=["breakfast","lunch","dinner"];

 

@Injectable()
export class RecepiesService {
  constructor(@InjectRepository(Recipe) private readonly RecipeRepository:Repository<Recipe>){}
  

  async create(createRecipes: CreateRecipes) {
    const now =timeToEat.find((tte)=>createRecipes.type==tte)
    if(now!==undefined){
    const recipe=this.RecipeRepository.create(createRecipes)
        return await this.RecipeRepository.save(recipe);
    }
    else return "not able to copy that"
    
  }

  async findAll() {
    return this.RecipeRepository.find();
  }
  
  async update(id: number, updateRecipesDto: UpdateRecipesDto) {
    const recipe= await this.RecipeRepository.findOne({
        where:{id}
    })
    const Name=recipe.name
    console.log(Name)
    const NewRecipe=Object.assign(recipe,updateRecipesDto)
    console.log(NewRecipe.name)
    if(Name === NewRecipe.name){
        console.log("BAZINGA")
    }

    return await this.RecipeRepository.save(recipe);
  }

  async findOne(id: number) {
    const recipe= await this.RecipeRepository.findOne({
        where:{id}
    })
    return recipe;
  }

  async remove(id: number) {
    const recipe= await this.findOne(id)
    if(!recipe){
      throw new NotFoundException()
    }
    return await this.RecipeRepository.remove(recipe);
  }
}