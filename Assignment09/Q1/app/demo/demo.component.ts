import { Component,OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  public num1 :number=0;
  public num2 :number=0;
  public numAnswer:number=0;
  constructor(public objArth : ArithmaticService)
  {
    this.num1=0;
  }

  ngOnInit()
  {

  }

  GetAddition()
  {
    //this.numAnswer=Number(this.num1) + Number(this.num2);
    this.numAnswer=this.objArth.Addition(Number(this.num1),Number(this.num2));
  }
  GetSubtraction()
  {
    this.numAnswer=this.objArth.Subtraction(this.num1,this.num2);
  }

}
