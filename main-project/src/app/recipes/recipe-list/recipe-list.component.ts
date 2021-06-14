import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ119Dd7KPW6akHWrSnKqfW_kbihJeb1P7DNw&usqp=CAU'),
    new Recipe('Second Version', 'This is the 2.0 test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ119Dd7KPW6akHWrSnKqfW_kbihJeb1P7DNw&usqp=CAU')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
