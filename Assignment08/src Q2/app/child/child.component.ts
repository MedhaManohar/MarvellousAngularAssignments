import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
    
    @Input() public messageFromParent :string="";
    @Output() public TransmitToParent = new EventEmitter();
    public MessageToParent : string="";
    
    public SendMessageToParent()
    {
      console.log(this.MessageToParent);
      return this.TransmitToParent.emit(this.MessageToParent)
    }

}
