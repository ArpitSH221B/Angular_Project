import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Array<Recipe> = [
    new Recipe('Name of the Recipe', 'Description of the Recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQatg5DQN1J41jW6eGSlunWWoCalYsKQIqwRrb6h7Z18gLhZ-m0&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
