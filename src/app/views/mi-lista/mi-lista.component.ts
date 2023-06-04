import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent {
  listadoTareas: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable:boolean }[] = [];
  tareaAgregada: boolean = false;
  
 
  constructor(private elementRef: ElementRef) {
    const tareasStorage = localStorage.getItem('listaStorage');
    this.listadoTareas=JSON.parse(tareasStorage|| JSON.stringify(this.listadoTareas));
   }

  agregarTarea() {
    if (this.tareaAgregada!=true) {
      const nuevaTarea = {
        Titulo: '',
        Fecha: '',
        Detalle:'',
        Realizada:false,
        Editable:true
        
      };
      this.listadoTareas.push(nuevaTarea);
      this.tareaAgregada = true;
    }
  }
  
   

  }
  



