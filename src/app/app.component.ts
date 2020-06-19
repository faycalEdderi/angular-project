import { Component, OnInit } from '@angular/core';
import { PizzaService } from './service/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  router: string;
   

  constructor(private _router: Router) {

    this.router = _router.url; 

    
    
  }

ngOnInit() {

}



}
