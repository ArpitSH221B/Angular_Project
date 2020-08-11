import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes : Array<Recipe> = [
        new Recipe(
            'Name of the Recipe', 
            'Description of the Recipe', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQatg5DQN1J41jW6eGSlunWWoCalYsKQIqwRrb6h7Z18gLhZ-m0&usqp=CAU',
            [
                new Ingredients('Meat',1),
                new Ingredients('French Fries',20)
            ]),
        new Recipe(
            'Another Name of the Recipe', 
            'Description of the Recipe', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQatg5DQN1J41jW6eGSlunWWoCalYsKQIqwRrb6h7Z18gLhZ-m0&usqp=CAU',
            [
                new Ingredients('Buns',4),
                new Ingredients('Meat',1)
            ])
      ];
    
    constructor(private slService : ShoppingListService){}

    getRecipe(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients : Ingredients[])
    {
        this.slService.addIngredientsFromRecipe(ingredients);
    }
}