import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]

  ngOnInit(){
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Usuário',
        icon: 'pi pi-fw pi-user',
        routerLink: 'usuario'
      },
      {
        label: 'Estados',
        icon: 'pi pi-fw pi-trash',
        routerLink: 'estados'
      },
    ];

  }
}
