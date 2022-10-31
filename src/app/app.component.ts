import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPrimeDari';

  items: MenuItem[] = [];

  ngOnInit() {

    this.items = [
    {
      label: 'Inicio',
      icon: "pi pi-fw pi-pincel",
      routerLink: "Inicio"
    },
    {
      label: 'Productos',
      icon: "pi pi-fw pi-pincel",
      routerLink: "Productos"
    },
    {
      label: 'Contacto',
      icon: "pi pi-fw pi-pincel",
      routerLink: "Contacto"
    }
    ]
}
}

