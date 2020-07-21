import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Array<Ingredients> = [
    new Ingredients('Apple',5),
    new Ingredients('Tomato',10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient : Ingredients)
  {
    this.ingredients.push(ingredient);
  }

}
