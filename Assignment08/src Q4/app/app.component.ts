import { Component,ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputText :string="";
  iLength :number=0;
  
   inputEvent(event: any)
  {
    
    this.iLength = event.target.value.length;
    
  }
  
}
