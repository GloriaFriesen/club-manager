import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'positionFilter',
})

export class PositionFilterPipe implements PipeTransform {

  transform(input: Player[], filterByPosition) {
  var output: Player[] = [];
    if(filterByPosition === "Jammer") {
      for(var i=0; i<input.length; i++) {
        if(input[i].position === "Jammer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByPosition === "Blocker") {
      for(var i=0; i<input.length; i++) {
        if(input[i].position === "Jammer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByPosition === "Coach") {
      for(var i=0; i<input.length; i++) {
        if(input[i].position === "Coach") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
