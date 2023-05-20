import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mumult'
})
export class MumultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number 
  {
    var multiplication : number=0;
    
    multiplication= Number(value) * Number(args[0])
    return multiplication;
  }

}
