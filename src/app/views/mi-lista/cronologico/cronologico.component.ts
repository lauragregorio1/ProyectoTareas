import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-cronologico',
  templateUrl: './cronologico.component.html',
  styleUrls: ['./cronologico.component.css']
})
export class CronologicoComponent {
  listaTareasStorage: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean }[] = [];
  listadoTareas: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable:boolean }[] = [];
  tareaAgregada: boolean = false;


  constructor(private elementRef: ElementRef) {
    const tareasStorage = localStorage.getItem('listaStorage');
    this.listadoTareas = JSON.parse(tareasStorage || JSON.stringify(this.listadoTareas));
    this.ordenarFechas();
  }

  agregarTarea() {
    if (this.tareaAgregada != true) {
      const nuevaTarea = {
        Titulo: '',
        Fecha: '',
        Detalle: '',
        Realizada: false,
        Editable:true


      };
      this.listadoTareas.push(nuevaTarea);
      this.tareaAgregada = true;
    }
    this.ordenarFechas();
  }

  ordenarFechas() {

    this.listadoTareas.sort((a, b) => {
      const fechaA: any = new Date(a.Fecha);
      const fechaB: any = new Date(b.Fecha);

      return fechaA - fechaB;
    });
  }

}
