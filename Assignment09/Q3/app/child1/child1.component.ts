import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
  bResult :string="";
  iInput :number=0;

  cnt :number=0;
  iInputStr :string="";
  constructor(public myServ:NumberService,public myServ1 : StringService)
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

  GetCount():void
  {
    this.cnt=this.myServ1.CountCapital(this.iInputStr);     
  }
}
