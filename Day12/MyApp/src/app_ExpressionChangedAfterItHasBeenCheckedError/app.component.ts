import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-child [data]="data"></app-child>
  `
})
export class AppComponent {
  data = {
    name: "Asaad"
  };
  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    // this.cd.detectChanges();
  }
}
