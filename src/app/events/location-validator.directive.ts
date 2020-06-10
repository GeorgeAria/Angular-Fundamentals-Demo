import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  
  //The providers array will add a new validator to the globally available NG_VALIDATORS service.
  //multi:true is needed to add the validator to NG_VALIDATORS instead of overriding it.
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})

export class LocationValidatorDirective implements Validator{

  constructor() { }

  validate(formGroup: FormGroup): { [key: string]: any; } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];

    //<FormGroup>formGroup.root allows for the access of a sibling DOM node.
    //In this case, the "formGroup" div is found and the onlineUrl input is taken.
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value) ) {
      return null;
    } else {
      return {validateLocation: false}
    }
  }

}
