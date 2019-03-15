import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(!args){
      return value;
    }
    else{
      args = args.toUpperCase()
    }

    return value.filter((item)=>{

      var regex = new RegExp(args,'gi')
      return item.languages[0].name.match(regex)

    })  
   
  }

}
