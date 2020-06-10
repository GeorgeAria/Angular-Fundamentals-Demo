import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  iconColor: string;

  @Input() count: number;
  @Input() set voted(val: boolean){
    this.iconColor = val ? 'red' : 'white';
  };

  @Output() vote = new EventEmitter();

  constructor() { }

  onClick() {
    this.vote.emit({});
  }

  ngOnInit(): void {
  }

}
