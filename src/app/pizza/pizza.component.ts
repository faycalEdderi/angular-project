import { Component,Input, OnInit } from '@angular/core';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas: any[];

  imageSrc :any
  
 

  public buttonName:any = 'Afficher Ingrédients';
  public show:boolean = false;
  
  
  

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {

    this.pizzas = this.pizzaService.pizzas;
    this.imageSrc= this.pizzaService.imageSrc
  }

  getStatus() {
    
  }
  toggle() {
    this.show = !this.show;
  
    if(this.show)  
      this.buttonName = "Cacher Ingrédients";
    else
      this.buttonName = "Afficher Ingrédients";
  }
  
  

}
