import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public str :string="Marvellous Infosytstems"

  public UpperCase()
  {
    this.str= this.str.toUpperCase();
  }

  public LowerCase()
  {
    this.str=this.str.toLocaleLowerCase();
  }
}
