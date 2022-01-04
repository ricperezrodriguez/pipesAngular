import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'RicaRDo pERez';
  numero: number = 1000;
  obj = {
    nombre: 'Ricardo'
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.numero);
    console.log( this.obj );
  }
}
