import { Component, OnInit } from '@angular/core';

//Importamos el servicio pAjax.
import { PAjaxService } from "../p-ajax.service";

@Component({
  selector: 'app-fotos-marte',
  templateUrl: './fotos-marte.component.html',
  styleUrls: ['./fotos-marte.component.css']
})

export class FotosMarteComponent implements OnInit {

  public datos: any; 
  public listaFotos:object;
  

  constructor(private serviciopAjax: PAjaxService) { 
    //Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos =>{
      console.log(daticos);
      this.asignarDatos(daticos);
    });
  }

  ngOnInit() {
  }

  private asignarDatos(datos:object){
    console.log(this.datos);
    this.datos= datos;
    this.listaFotos = this.datos.photos; //photos: es lo que me aparece en la API. photos{...}
  }

}
