import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  public outputData: any;

  showOutputData(data: any) {
    this.outputData = data;
    console.log(data);
  }

}
