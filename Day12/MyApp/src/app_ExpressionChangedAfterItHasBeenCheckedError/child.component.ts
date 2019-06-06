import { Component, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{data.name}}
    </p>
  `
})
export class ChildComponent implements AfterViewChecked {
  @Input('data') data;

  ngAfterViewChecked() {
     this.data.name = "Mike";
    //setTimeout(() => { this.data.name = "Mike"; });

  }
}
