import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MiMenuComponent } from './mi-menu/mi-menu.component';
import { MiListaComponent } from './views/mi-lista/mi-lista.component';
import { TareaComponent } from './views/mi-lista/tarea/tarea.component';

import { MiDocumentacionComponent } from './mi-documentacion/mi-documentacion.component';
import { CronologicoComponent } from './views/mi-lista/cronologico/cronologico.component';
import { DiasComponent } from './views/mi-lista/dias/dias.component';
import { EstadoComponent } from './views/mi-lista/estado/estado.component';

@NgModule({
  declarations: [
    AppComponent,
    MiMenuComponent,
    MiListaComponent,
    TareaComponent,

    MiDocumentacionComponent,
    CronologicoComponent,
    DiasComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule, FormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
