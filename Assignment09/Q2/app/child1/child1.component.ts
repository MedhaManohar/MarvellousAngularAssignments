import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
  bResult :string="";
  iInput :number=0;
  constructor(public myServ:NumberService)
  {

  }

  ngOnInit(): void 
  {
      
  }
  GetResult():void
  {
   if(this.myServ.ChkPrime(this.iInput)==true)
     this.bResult="prime number"
     else
     this.bResult="not prime number"
  }
}
