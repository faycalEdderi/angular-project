import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [

  
  { path: '', component: HeaderComponent },
  { path: 'pizzas', component: PizzaComponent },

  { path: 'menus', component: MenuComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

