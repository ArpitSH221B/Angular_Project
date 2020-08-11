import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    ingredients : Array<Ingredients> = [
        new Ingredients('Apple',5),
        new Ingredients('Tomato',10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients : Ingredients){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingredients : Ingredients[]){
        // for (let ingredient of ingredients){
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}