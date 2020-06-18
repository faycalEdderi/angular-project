import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  

  { path: 'pizzas', component: PizzaComponent },

  { path: 'menus', component: MenuComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

