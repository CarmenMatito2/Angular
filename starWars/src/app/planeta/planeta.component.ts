import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  @Input() planeta: Object;  //--> planeta es un atributo de entrada.
  constructor() { 
    
  }

  ngOnInit() {
    console.log("voy a imprimir planeta.")
    console.log(this.planeta);
  }

}
