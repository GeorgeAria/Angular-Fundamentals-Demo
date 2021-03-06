import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  addMode: boolean;
  event: IEvent;
  filterBy = 'all';
  sortBy: string = 'votes'

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    //This listens for resolved data changes.
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  addSession():void{
    this.addMode = true;
  }

  saveNewSession(session: ISession): void{
    //This calls the max method with all of the session IDs from the sessions array.
    //It will return the max session ID.
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(): void{
    this.addMode = false;
  }
}
