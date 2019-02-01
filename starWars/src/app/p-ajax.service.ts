import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) 

export class PAjaxService {
    //Variable:
    private urlPersonajes:string = "https://swapi.co/api/people/?format=json";

    //creamos un objeto de tipo HttpClient
  constructor(private http: HttpClient) { }


  //Creamos una función "peti" para hacer peticiones:
  peti(){
    console.log("Toy en peti");
    //Hacemos la petición: (la devolvemos).
    return this.http.get(this.urlPersonajes);
  }

  //Creamos una funcion para hacer peticiones a las URL´s.
  petiAurl(url:string){
    console.log("Toy en petiAurl");
    return this.http.get(url);
  }
}
