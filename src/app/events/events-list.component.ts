import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {}

  handleEventClicked(data: string): void{
    console.log("received: " + data);
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}
