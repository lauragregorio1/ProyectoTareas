import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTareas';
  opcion:number=1;

    
  menu(opcion:number):void{
    this.opcion=opcion;
  }


 
}
