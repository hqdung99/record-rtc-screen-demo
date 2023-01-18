import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Input() show: boolean = true;
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
