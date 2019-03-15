import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(!args){
      return value;
    }
    else{
      args = args.toUpperCase()
    }

    return value.filter((item)=>{

      var regex = new RegExp(args,'gi')
      return item.name.match(regex)

    })  
   
  }

}
