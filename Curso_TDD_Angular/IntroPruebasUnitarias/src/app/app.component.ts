import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntroPruebasUnitarias';
  myVar = 'Hola Mundo';
  saludo = 'Buenos dias Juan';

  par(numero: number): boolean{
    return numero % 2 === 0 ? true : false;
  }


}
