import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  @Input() pizzaId: string;
  @Input() pizzaName: string;
  @Input() pizzaPrice: string;
  @Input() pizzaIngredients: string;

  public show:boolean = false;
  public buttonName:any = 'Afficher Ingrédients';
  
  

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.pizzaPrice;
  }
  toggle() {
    this.show = !this.show;
  
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Cacher Ingrédients";
    else
      this.buttonName = "Afficher Ingrédients";
  }
  

}
