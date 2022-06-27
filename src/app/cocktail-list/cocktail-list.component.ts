import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor(public cocktail: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktail.getCocktails()
  }

}
