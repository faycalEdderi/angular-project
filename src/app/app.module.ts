import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaService } from './service/pizza.service';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './service/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PizzaService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
