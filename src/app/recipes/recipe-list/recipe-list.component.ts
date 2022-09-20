import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple test',
    'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
