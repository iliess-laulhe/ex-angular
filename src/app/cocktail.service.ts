import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { Cocktail } from './models/cocktail.model';

@Injectable({providedIn:  'root'})

export  class  CocktailService{
   
    private  service:  HttpClient;

    constructor(param_service:  HttpClient) {
        this.service  =  param_service;
    }

    public  getCocktails():  Observable<Cocktail[]> {
        const  cocktails:Observable<any> = this.service.get("assets/cocktailList.json");
       
        return  cocktails;
    }
}