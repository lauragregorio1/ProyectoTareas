import { Component, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MiListaComponent } from '../mi-lista.component';
import { CronologicoComponent } from '../cronologico/cronologico.component';



@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() Titulo: string;
  @Input() Fecha: string;
  @Input() Detalle: string;
  @Input() Realizada: boolean;
  @Input() Editable: boolean;
  listaTareasStorage: { Titulo: string, Fecha: string, Detalle: string, Realizada: boolean, Editable: boolean }[] = [];
  tareaColor: string = '#D8D8D8';

  @Input() atr: MiListaComponent | null;

  @Input() cron: CronologicoComponent | null;


  constructor(public elementRef: ElementRef) {
    this.Titulo = "";
    this.Fecha = "";
    this.Detalle = "";
    this.Realizada = false;
    this.Editable = false;
    this.atr = null;
    this.cron = null;
  }
  handleChange(event: any) {
    // Lógica para manejar el evento de cambio aquí
    if (event.target.checked) {
      console.log('La casilla de verificación está marcada');
      // Llamar a tu función o realizar cualquier otra acción
      this.realizarTarea(this.elementRef.nativeElement.querySelector('#inputTitulo').value);
    } else {
      console.log('La casilla de verificación está desmarcada');
      this.desrealizarTarea(this.elementRef.nativeElement.querySelector('#inputTitulo').value);
    }
  }

  guardarTarea() {
    this.elementRef.nativeElement.querySelector('#inputTitulo').disabled = true;
    this.elementRef.nativeElement.querySelector('#inputFecha').disabled = true;
    this.elementRef.nativeElement.querySelector('#inputDetalle').disabled = true;
    this.elementRef.nativeElement.querySelector('#guardar').disabled = true;


    if (this.elementRef.nativeElement.querySelector('#inputTitulo').value != "" && this.elementRef.nativeElement.querySelector('#inputFecha').value != "") {
      if (this.atr != null) {

        this.atr.tareaAgregada = false;
      }

      const nuevaTareaStorage = {
        Titulo: this.elementRef.nativeElement.querySelector('#inputTitulo').value,
        Fecha: this.elementRef.nativeElement.querySelector('#inputFecha').value,
        Detalle: this.elementRef.nativeElement.querySelector('#inputDetalle').value,
        Realizada: false,
        Editable: false
      };
      if (localStorage.getItem(`listaStorage`)) {
        this.listaTareasStorage = JSON.parse(localStorage.getItem(`listaStorage`) || JSON.stringify(this.listaTareasStorage));
      }
      for (let index = 0; index < this.listaTareasStorage.length; index++) {
        if (this.listaTareasStorage[index].Titulo == nuevaTareaStorage.Titulo) {
          alert("Título en uso");
          return;
        }

      }
      this.listaTareasStorage.push(nuevaTareaStorage);
      this.tareaColor = '##D8D8D8';
      localStorage.setItem(`listaStorage`, JSON.stringify(this.listaTareasStorage));
    } else {
      alert("No puedes dejar el título o la fecha vacíos");
    }

  }
  realizarTarea(param: any) {

    this.listaTareasStorage = JSON.parse(localStorage.getItem(`listaStorage`) || JSON.stringify(this.listaTareasStorage));

    for (let index = 0; index < this.listaTareasStorage.length; index++) {
      console.log(param);
      console.log(this.listaTareasStorage[index].Titulo);
      if (this.listaTareasStorage[index].Titulo == param) {
        this.listaTareasStorage[index].Realizada = true;
        this.tareaColor = '#C7E9B0';
        localStorage.setItem(`listaStorage`, JSON.stringify(this.listaTareasStorage));
        return;
      }
    }

  }
  borrarTarea(param: any) {
    this.listaTareasStorage = JSON.parse(localStorage.getItem(`listaStorage`) || JSON.stringify(this.listaTareasStorage));

    if (this.atr != null) {
      const indiceAEliminarHTML = this.listaTareasStorage.findIndex(objeto => objeto.Titulo === param);
      console.log(indiceAEliminarHTML);
      this.atr.listadoTareas.splice(indiceAEliminarHTML, 1);
      this.atr.tareaAgregada = false;
    }
    const indiceAEliminar = this.listaTareasStorage.findIndex(objeto => objeto.Titulo === param);
    if (indiceAEliminar != -1) {
      this.listaTareasStorage.splice(indiceAEliminar, 1);
      localStorage.setItem(`listaStorage`, JSON.stringify(this.listaTareasStorage));
    }

  }
  desrealizarTarea(param: any) {
    this.listaTareasStorage = JSON.parse(localStorage.getItem(`listaStorage`) || JSON.stringify(this.listaTareasStorage));

    for (let index = 0; index < this.listaTareasStorage.length; index++) {

      if (this.listaTareasStorage[index].Titulo == param) {
        this.listaTareasStorage[index].Realizada = false;
        this.tareaColor = '#D8D8D8';
        localStorage.setItem(`listaStorage`, JSON.stringify(this.listaTareasStorage));
        return;
      }
    }


  }

}
