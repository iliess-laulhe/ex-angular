import { Injectable } from  '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
        providedIn:  'root'
})

export  class  CocktailService {
    public cocktailList: Cocktail[] = [
        new Cocktail('mojito',8,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIzxSFSWltaqtvaFKG7HR7fu_Z283IGCF_g&usqp=CAU'),
        new Cocktail('pina colada',6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70zH4JbDrJvu2rgJXrSp9dcHNZ-eO2CbFnw&usqp=CAU'),
        new Cocktail('Margarita',10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLKXgrjVlVt7n2srIKdZd_7nZ3-uvpSIqGg&usqp=CAU')
    ]

        constructor() { }

        public  getCocktails(): Cocktail[]{
            return   this.cocktailList;
        }

}
