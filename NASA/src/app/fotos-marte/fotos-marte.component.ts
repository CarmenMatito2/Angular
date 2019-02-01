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
  public listaPersonas;

  constructor(private serviciopAjax: PAjaxService) { 
    //Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos =>{
      console.log(daticos);
      this.asignarDatos(daticos);
    });

    //Hacemos petición a lista personas.
    serviciopAjax.hecerPetiListapersonas().subscribe(lista =>{
      console.log(lista);
      this.listaPersonas=lista;
    });
      //, error =>{
      //console.log(error);
      //alert("Ha habido un error");
  }

  ngOnInit() {
  }

  private asignarDatos(datos:object){
    console.log(this.datos); //En el console log, pone undefined ya que datos es la
                             //variable que tengo arriba, y es any (datos:any).
    this.datos= datos;
    this.listaFotos = this.datos.photos; //photos: es lo que me aparece en la API. photos{...}
  }

}
