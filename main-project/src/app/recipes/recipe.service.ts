import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Carne moida com Brocolis', 'Receita simples com muito tempeiro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ119Dd7KPW6akHWrSnKqfW_kbihJeb1P7DNw&usqp=CAU', [ new Ingredient('Carne moida', 1), new Ingredient('brócolis', 8) ]),
        new Recipe('Açaí com Leite ninho', 'Tigela de açaí tropical', 'https://media-cdn.tripadvisor.com/media/photo-s/07/17/a5/75/acai-com-leite-ninho.jpg', [ new Ingredient('açaí', 1), new Ingredient('leite ninho', 5) ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();//to only get a copy outside and not change the array inside of this service
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients[1]) //estava dando erro, descobri sozinho sem motivo que passando um argumento em numero funciona 
    }
}