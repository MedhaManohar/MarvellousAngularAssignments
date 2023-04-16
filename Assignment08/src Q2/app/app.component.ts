import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public msgTochild:string="";;
  public msgFromChild : string="";
  constructor()
  {
    this.msgTochild="Hello from parent";
    this.msgFromChild="----"
  }

  
}
