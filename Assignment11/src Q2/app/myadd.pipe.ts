import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number 
  {
    var addition :number=0;
    addition=Number(value) + Number(args[0]);
    // for(var i=0;i<=args.length;i++);
    // {
    //   addition= addition + Number(args[i]) ;
    // }
    return addition;
  }

}
