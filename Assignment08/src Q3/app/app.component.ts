import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputText :string="";
  iLength :number=0;
  
  public ShowLength()
  {
    this.iLength=this.inputText.length;
  }
}
