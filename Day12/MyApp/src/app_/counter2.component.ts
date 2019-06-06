import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter2',
  template: `
    <p>
      <button (click)="decrease()"> - </button>
      {{counterValue}}
      <button (click)="increase()"> + </button>
    </p>
  `,
  styles: []
})
export class Counter2Component implements OnInit {
  counterValue: number;
  @Input() counter: number;
  @Output() outputEmitter = new EventEmitter();

  constructor() {
    this.counterValue = 0;
  }

  emitMessage() {
    this.outputEmitter.emit(this.counterValue.toString());
  }

  increase() {
    this.counterValue++;
    this.emitMessage();
  }

  decrease() {
    this.counterValue--;
    this.emitMessage();
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

}
