import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div [ngClass]="{myColor:true, myBorder:false}">Directives</div>
    <div [class.myBorder]="true">Directives</div>
    <hr>
    <div [ngStyle]="{'background-color':'yellow'}">Directives</div>
    <hr>
    <div myDirective1>Custom Directive</div><br>
    <div myDirective1 shadow="1px 1px 5px red">Custom Directive</div>
    <hr>
    <h2>*ngIf</h2>
    <div *ngIf="switch">Conditional Text</div>
    <ng-template [ngIf]="switch">
        <div>
            Conditional Text
        </div>
    </ng-template>
    <button (click)="onSwitch()">Switch</button>
    <hr>
    <h2>*ngFor</h2>
    <ul>
        <li *ngFor="let item of items; let i = index">{{item}} - (Index: {{i}})</li>
    </ul>
    <hr>
    <h2>ngSwitch</h2>
    <div [ngSwitch]="value">
      <p *ngSwitchCase="10">10</p>
      <p *ngSwitchCase="100">100</p>
      <p *ngSwitchDefault>Default</p>
    </div>
  `,
    styles: ['.myBorder { border: 2px solid red; }',
        '.myColor  { color: green; }']
})
export class AppComponent {
    private switch = true;
    private items = [1, 2, 3, 4, 5];
    private value = '10';
    onSwitch() {
        this.switch = !this.switch;
    }
}
