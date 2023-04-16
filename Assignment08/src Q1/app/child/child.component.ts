import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  inputValue : string ="";
  @Output() public myEvent=new EventEmitter();

  public SendMessage()
  {
    //console.log(this.inputValue);
    return this.myEvent.emit(this.inputValue)
  }

}
