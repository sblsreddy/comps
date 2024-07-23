import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
    onClick(index: number) {
      this.openedItemIndex = index;
    }

  @Input() items:any = [];

  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
