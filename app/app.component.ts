import { Component, Renderer2, ViewChild } from '@angular/core';
import { InitDivDirective } from './init.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './material.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  rows = [
    {
      id: 1,
      nombre: 'John Doe',
      email: 'johndoe@example.com',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae venenatis lorem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Jane Smith',
      email: 'janesmith@example.com',
      descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      estado: 'Inactivo'
    },
    {
      id: 3,
      nombre: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      descripcion: 'Aenean l',
      estado: 'Pendiente'
    }
  ];

  columns = [
    { name: 'ID', prop: 'id' },
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Email', prop: 'email' },
    { name: 'Descripción', prop: 'descripcion', expanded: false, truncate: true, maxLength: 50 },
    { name: 'Estado', prop: 'estado' }
  ];

  
  toggleRow(row: any) {
    row.expanded = !row.expanded;
  }
}
