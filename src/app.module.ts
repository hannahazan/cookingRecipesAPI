import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { Recipe } from './recipes/entities/recipe.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';




@Module({
  imports: [RecipesModule,IngredientsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER_NAME,
      password: process.env.DATA_BASE_PW,
      database: process.env.DATA_BASE,
      entities: [Ingredient,Recipe],
      //ne pas utiliser synchronize en prod
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
