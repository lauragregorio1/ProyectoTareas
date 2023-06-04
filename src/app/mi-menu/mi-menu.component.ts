import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-mi-menu',
  templateUrl: './mi-menu.component.html',
  styleUrls: ['./mi-menu.component.css']
})
export class MiMenuComponent {
  @Input() app:AppComponent|null=null;

  menu(op:number){
    if(this.app!=null)
    this.app.menu(op);
    
    
  }

}
