import { BadGatewayException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { errorMonitor } from 'events';
import { ApiResponse } from '@nestjs/swagger';
import { Http2ServerResponse } from 'http2';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@Injectable()
export class IngredientsService {
  constructor(@InjectRepository(Ingredient) private readonly IngredientRepository:Repository<Ingredient>){}

  async create(createIngredientDto: CreateIngredientDto) {
    
    const ingredient=this.IngredientRepository.create(createIngredientDto)
    return await this.IngredientRepository.save(ingredient);
  }

  async findAll() {
    return this.IngredientRepository.find();
  }

  async findOne(id: number) {
    
    return await this.IngredientRepository.findOneBy({id});
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const recipe= await this.IngredientRepository.findOne({
        where:{id}
    })
    Object.assign(recipe,updateIngredientDto)
    

    return await this.IngredientRepository.save(recipe);
  }


  async remove(id: number) {
    const ingredient= await this.findOne(id)
    if(!ingredient){
      throw new NotFoundException()
    }
    else if(error){
      throw new ConflictException()
    }
    return await this.IngredientRepository.remove(ingredient);
  }
}
