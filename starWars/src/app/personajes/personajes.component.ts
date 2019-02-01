import { Component, OnInit } from '@angular/core';
import {PAjaxService } from "../p-ajax.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public datos:any; //todo lo que me va  aresponder la api
  public listaPer:Object; //es lista de personas (lo que yo quiero pintar).
  public datosPlaneta: Object = null;  //por defecto es null.


  constructor(private serviciopAjax: PAjaxService) { 
    //Hacemos la petición Ajax:
    serviciopAjax.peti().subscribe(daticos =>{
      console.log(daticos);
      this.asignarDatos(daticos);
    });
  }

  ngOnInit() {
  }


  //Pedimos los datos del planeta que queremos mostrar.
  //Esta función se ejecuta cuando cuando puldsamos en el enlace del planeta
  pedirPlaneta(evento, url:string){
    evento.preventDefault();
    console.log(url +"?format=json");

    this.serviciopAjax.petiAurl(url +"?format=json").subscribe(res =>{
      console.log(res);
      this.datosPlaneta = res;
    });
  }

  //Hacemos una petición con lo que contiene la url "next" -->page2, page3....
  siguientesPer(){
    this.serviciopAjax.petiAurl(this.datos.next).subscribe(daticos =>{
      this.asignarDatos(daticos);
    });
  }

//Hacemos una petición con lo que contiene la url "previous" -->page10, page9....
  anterioresPer(){
    this.serviciopAjax.petiAurl(this.datos.previous).subscribe(daticos =>{
      this.asignarDatos(daticos);
    });
  }

  private asignarDatos(datos:object){
    this.datos= datos;
    console.log(this.datos);
    this.listaPer = this.datos.results;
  }



}
