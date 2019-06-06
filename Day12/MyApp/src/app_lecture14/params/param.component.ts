import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-param',
  template: `
    <p>
      Parameter!  ID: {{id}}
    </p>
  `
})
export class ParamComponent {
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: string;
  onetimeId: string;

  constructor(private activatedRoute: ActivatedRoute) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
