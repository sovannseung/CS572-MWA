import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-fragment',
  template: `
    <p>
      Fragment! {{fragment}} 
    </p>
  `,
  styles: []
})
export class FragmentComponent {

  private subscription: Subscription;
  fragment: string;


  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.fragment.subscribe(
      (fParam: any) => this.fragment = fParam
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
