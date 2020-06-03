//InjectionToken creates a token used for the Dependecy Injection registry
//in order to find the instance for the service that we want.

import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr{
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
