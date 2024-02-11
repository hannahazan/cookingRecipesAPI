import { Module } from '@nestjs/common';
import { RecepiesController } from './recepies.controller';
import { RecepiesService } from './recepies.service';
import { Recipe } from './entities/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecepiesController],
  providers:[RecepiesService]
})
export class RecipesModule {}
