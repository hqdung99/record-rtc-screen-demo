import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Input() show: boolean = true;
  @Input() isDisabled = false;
  @Input() class: any = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
