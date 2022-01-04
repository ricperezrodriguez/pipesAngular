import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'ricardo';
  nombreUpper: string = 'RICARDO';
  nombreCompleto: string = 'RiCARdO PéREz'

  fecha: Date = new Date();



  constructor() { }

  ngOnInit(): void {
  }

}
