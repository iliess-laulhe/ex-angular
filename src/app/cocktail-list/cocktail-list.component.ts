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
  private  service:CocktailService;

  constructor( param_service:CocktailService ){
      this.service  =  param_service;
  }

  public  ngOnInit():void{
      this.service.getCocktails().subscribe(
          (param_service:Array<Cocktail>) => {
              this.cocktails  =  param_service;
          }
      );
  }
}
