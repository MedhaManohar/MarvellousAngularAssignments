import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value:string): string 
  {
    var MyRev:string[]=value.split('');
    var RevString:string="";
    for(var num:number=MyRev.length;num>=0;num--)
    {
      if(RevString=="undefined")
      RevString=MyRev[num];
      else
      RevString=RevString+MyRev[num];
    }
    return RevString;
  }

}
