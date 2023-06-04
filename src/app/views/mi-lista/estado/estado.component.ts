import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  listaTareasStorage: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean }[] = [];
  listadoTareas: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable:boolean }[] = [];
  tareaAgregada: boolean = false;
  listaTareasRealizadas: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable:boolean }[] = [];
  listaTareasPendientes: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable:boolean }[] = [];


  
  constructor(private elementRef: ElementRef) {
    const tareasStorage = localStorage.getItem('listaStorage');
    this.listadoTareas = JSON.parse(tareasStorage || JSON.stringify(this.listadoTareas));

    for (let i = 0; i < this.listadoTareas.length; i++) {
      const element = this.listadoTareas[i];
      if(element.Realizada==true){
        this.listaTareasRealizadas.push(element);
      }else{
        this.listaTareasPendientes.push(element);
      }
      
    }
  }



}
