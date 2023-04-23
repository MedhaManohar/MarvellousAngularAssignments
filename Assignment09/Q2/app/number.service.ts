import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  //check prime

  ChkPrime(num : number) : boolean
  {
      
      for(var i: number=2;i<num;i++)
      {
          if(num % i==0)
          {
              return false;
          }
      }
      return true;

  }
}
