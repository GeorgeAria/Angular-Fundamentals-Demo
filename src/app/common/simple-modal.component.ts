import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  
  @ViewChild ('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal(): void{
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

  ngOnInit(): void {
  }

}
