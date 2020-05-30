import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {}

  handleEventClicked(data: string): void{
    console.log("received: " + data);
  }

  //toastr is a node_module that allows for good-looking notifications to appear in the web app.

  handleThumbnailClick(eventName: string): void{
    this.toastr.success(eventName);
  }



  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}
