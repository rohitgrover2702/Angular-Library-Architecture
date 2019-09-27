import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kobe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  label: string;
  @Input()
  class: string;
  @Input()
  type: string;
  @Input()
  disableButton: boolean;
  @Input()
  style: object;

  @Output()
  onclick = new EventEmitter<string>();

  clickMe() {
    this.onclick.emit();
  }

  constructor() { }

  ngOnInit() {

  }

}
