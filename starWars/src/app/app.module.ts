import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

/*-Configuramos el Angular en Español.*/
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

//El segundo parámetro 'es' es opcional.
registerLocaleData(localeEs, "es");

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetaComponent } from './planeta/planeta.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PlanetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
