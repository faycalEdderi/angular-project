import { Component, OnInit } from '@angular/core';
import { PizzaService } from './service/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pizzas: any[];
  

  constructor(private pizzaService: PizzaService) {

    
    
  }

ngOnInit() {

  this.pizzas = this.pizzaService.pizzas;

}



}
