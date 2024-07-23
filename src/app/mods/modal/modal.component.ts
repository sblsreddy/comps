import { Component, OnInit, ElementRef , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter(); // classic child to parent communication scenario

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestory(): void{
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit(); // classic child to parent communication scenario
  }

}
