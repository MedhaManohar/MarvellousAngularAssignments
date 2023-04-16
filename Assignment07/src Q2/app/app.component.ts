import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public strName : string="Marvellous Infosystems"
  
  public fun()
  {
    return this.strName;
  }
}
