import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
{
  cnt :number=0;
  iInputStr :string="";
  constructor(public myServ:StringService)
  {

  }

  ngOnInit(): void 
  {
      
  }
  GetCount():void
  {
    this.cnt=this.myServ.CountCapital(this.iInputStr);     
  }
}
