import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ119Dd7KPW6akHWrSnKqfW_kbihJeb1P7DNw&usqp=CAU'),
        new Recipe('Second Version', 'This is the 2.0 test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ119Dd7KPW6akHWrSnKqfW_kbihJeb1P7DNw&usqp=CAU')
      ];

    getRecipes() {
        return this.recipes.slice();//to only get a copy outside and not change the array inside of this service
    }
}