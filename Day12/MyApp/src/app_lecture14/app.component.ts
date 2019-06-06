import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-xs-10">
            <h1>Routing Examples!</h1>
            <hr>
            <a [routerLink]="['']">Home</a> |
            <a [routerLink]="['aboutus']">About Us</a> |
            <a [routerLink]="['params', 'route', id.value]">Param</a> |
            <a [routerLink]="['params', 'query']" [queryParams]="{id: id.value}">Query Param</a> |
            <a [routerLink]="['params', 'fragment']" [fragment]="id.value">Fragment</a> |
            <input type="text" #id (input)="0">
            <a [routerLink]="['parentchild', 'parent']">Parent</a> |
            <a [routerLink]="['parentchild', 'parent', 'child']">Parent-Child</a> |
            <a [routerLink]="['guards']">Guards</a>
            <hr>
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
  `,
  styles: ['.active { color:#fff; background-color:#f44336; border-radius:32px; padding: 5px 10px; }']
})
export class AppComponent {
  // angular will boot our AppComponent, then read the Routes we defined
  // will load the Route based on our specifications and push it into <router-outlet>
}
