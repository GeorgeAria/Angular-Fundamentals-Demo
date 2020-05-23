import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  //@Input tells Angular to expect an "event" value to be passed into this component.
  //@Output allows Angular to output a JavaScript event to a parent component.

  @Input() event:any;
  @Output() eventClick = new EventEmitter();

  someProperty: string = "Hello String!";

  constructor() { }

  handleClickMe(): void{
    this.eventClick.emit('hello fam');
  }

  logFoo(): void{
    console.log("foo");
  }

  getStartTimeClass(): string{
    if(this.event && this.event.time === '8:00 am')
    {
      return 'green bold';
    }
    else
    {
      return '';
    }

  }

  ngOnInit(): void {
  }

}
