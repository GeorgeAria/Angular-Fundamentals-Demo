import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  //map() gives access to the events in the observable stream to is given in getEvents()
  resolve(){
    return this.eventService.getEvents().pipe(
      map(
        events => events
      )
    )
  }

}
