import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <li> {{day}} </li>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() day;
  constructor() { }

  ngOnInit() {
  }

}
