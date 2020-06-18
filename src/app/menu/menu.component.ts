import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: any[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

    this.menus = this.menuService.menus;
  }

}
