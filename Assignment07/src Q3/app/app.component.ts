import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public str : string="Marvellous Infosystems"

  public Display(str1:string)
  {
    this.str=str1;
  }
}
