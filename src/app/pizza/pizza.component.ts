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

  detail(pk){
    var element = document.getElementById(pk);
    
    var class_invisible = element.classList.contains("invisible");
    var class_visible = element.classList.contains("visible");
    console.log(class_invisible)
    //element.classList.add("invisible");
    if(class_invisible){
      element.classList.add("visible");
      element.classList.remove("invisible");
    }
    if(class_visible){
      element.classList.add("invisible");
      element.classList.remove("visible");
    }
    
    
    
    

  }
  
  

}
