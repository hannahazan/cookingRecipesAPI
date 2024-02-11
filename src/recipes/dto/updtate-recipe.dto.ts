
import { CreateRecipes } from "./create-recipe.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateRecipesDto extends PartialType(CreateRecipes) {}