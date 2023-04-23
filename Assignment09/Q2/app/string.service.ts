import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(strInput:string):number
  {
    let iNum :number=0;
    let strArray: string[] = strInput.split('');
    for(var i=0;i<strArray.length;i++)
    {
      if(strArray[i]==strArray[i].toUpperCase() && strArray[i]!=" ")
      {
        iNum++;
      }
    }
    return iNum;
  }
}
