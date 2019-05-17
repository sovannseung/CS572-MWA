import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul> <app-dumb *ngFor="let val of Arr" [day]='val'></app-dumb>  </ul>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  Arr = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() { }

  ngOnInit() {
  }

}
