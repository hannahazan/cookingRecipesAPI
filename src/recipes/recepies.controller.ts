import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { RecepiesService } from './recepies.service';
import { CreateRecipes } from './dto/create-recipe.dto';
import { UpdateRecipesDto } from './dto/updtate-recipe.dto';

//recepies est la route principale pour le nouveau module
@Controller('Recipes')
export class RecepiesController {
  constructor(private readonly recipesServices: RecepiesService) {}

  @Post()
  create(@Body() createRecipes: CreateRecipes) {
    return this.recipesServices.create(createRecipes);
  }

  @Get()
  findAll() {
    return this.recipesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesServices.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipesDto: UpdateRecipesDto) {
    return this.recipesServices.update(+id, updateRecipesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesServices.remove(+id);
  }
}
