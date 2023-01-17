import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gen-button',
  templateUrl: './gen-button.component.html',
  styleUrls: ['./gen-button.component.scss']
})
export class GenButtonComponent  {
  @Input() type= 'primary';
  @Input() isLoading: boolean= false;
  @Input()disabled: boolean = false
  @Input() text: string = '';
  @Input() customClass: string = '';

  @Output() genClick = new EventEmitter<any>();

  constructor() { }

  clicked(){
    if(!this.disabled && !this.isLoading)
      this.genClick.emit();
  }
}
