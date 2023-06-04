import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {
  listaTareasStorage: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean }[] = [];
  listadoTareas: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable: boolean }[] = [];
  tareaAgregada: boolean = false;
  listadoDias: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable: boolean }[] = [];




  constructor(private elementRef: ElementRef) {
    const tareasStorage = localStorage.getItem('listaStorage');
    this.listadoTareas = JSON.parse(tareasStorage || JSON.stringify(this.listadoTareas));
  }





  filtrarPorDias() {
    let fecha = this.elementRef.nativeElement.querySelector('#fecha').value;
    console.log(fecha);
    for (let i = 0; i < this.listadoTareas.length; i++) {
      const element = this.listadoTareas[i];
      if(element.Fecha.slice(0,10)==fecha){
        this.listadoDias.push(element);
      }


    }


  }


}
