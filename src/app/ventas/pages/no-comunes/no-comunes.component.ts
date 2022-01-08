import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ricardo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }



  //i18nPlural
  clientes:string[] = ['Maria', 'Francesco', 'Davide', 'Adrian', 'Roberto', 'Julia']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    if ( this.genero === 'masculino') {
      this.nombre = 'Brenda';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Ricardo';
      this.genero = 'masculino';
    }

  }

  borrarCliente() {
    this.clientes.pop();
  }
  


  //KeyValues Pipe
  persona = {
    nombre: 'Ricardo',
    edad: '33',
    direccion: 'Nigran Pontevedra'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Asyn Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('fin de la promesa!');
    }, 3500);
  })

}
