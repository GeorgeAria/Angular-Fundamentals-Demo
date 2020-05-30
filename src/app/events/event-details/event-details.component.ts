import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  addMode: boolean;
  event:IEvent;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void{
    this.addMode = false;
  }
}
