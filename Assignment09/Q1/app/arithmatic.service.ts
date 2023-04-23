import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  Addition(no1 :number,no2:number) :number
  {
    return no1 + no2;
  }

  Subtraction(no1 :number,no2:number) :number
  {
    return no1 - no2;
  }
}
