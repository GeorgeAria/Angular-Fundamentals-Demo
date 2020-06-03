import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  visible: boolean = true;

  constructor() { }

  toggleContent(): void{
    this.visible = !this.visible;
  }

  ngOnInit(): void {
  }

}
