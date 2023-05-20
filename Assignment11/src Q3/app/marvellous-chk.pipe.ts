import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string 
  {
    var result :string="";
    if(args[0].toLocaleLowerCase()=="perfect")
     return this.ChkPerfect(value);
    else if (args[0].toLocaleLowerCase()=="prime")
    return this.ChkPrime(value);
    else if (args[0].toLocaleLowerCase()=="even")
    return this.ChkEven(value);
    else if (args[0].toLocaleLowerCase()=="odd")
     return this.ChkOdd(value);
    
     return "parameter not proper"
  }

  ChkPrime(num1 : number) : string
  {
    var m : number=0;
    var flag:number=0;
    m=num1/2;    
    for(var i=2;i<=m;i++)    
    {    
    if(num1%i==0)    
    {    
      return num1 + " is not prime";    
    }    
    }    
    if(flag==0)    
     return num1 + " is prime";
    else
      return num1 + " is not prime";
  }
  ChkPerfect(num1 : number) : string
  {
    var sum :number=0;
    var rem:number=0;
    for (var i = 1; i <= (num1 - 1); i++)
    {
        rem = num1 % i;
	      if (rem == 0)
        {
            sum = sum + i;
        }
    }
    if (sum == num1)
        return (num1 + " is perfect number");
    else
        return( num1 + " is not a perfect number");
    
  }
  ChkEven(num1 : number) : string
  {
    if(num1%2==0)
     return num1 + " is even number"
    else
     return num1 + " is not even number"
  }
  ChkOdd(num1 : number) : string
  {
    if(num1%2==0)
     return num1 + " is not odd number"
    else
     return num1 + " is odd number"
  }
}
