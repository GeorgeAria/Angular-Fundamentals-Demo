// This is a custom pipe that is used to format a number value to a string value.
// It can be used after putting the number "|" symbol and naming it by the @Pipe name.
// In this case, it is "duration" and is used in "session-list.component.html".

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
      case 1: return 'Half Hour';
      case 2: return 'One Hour';
      case 3: return 'Half Day';
      case 4: return 'Full Day';
      default: return value.toString();
    }

  }

}
