import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent: any;

  constructor(private router: Router,
              private eventService: EventService) { }

  cancel(): void
  {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: any): void{
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
  }

}
