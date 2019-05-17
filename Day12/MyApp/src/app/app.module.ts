import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { Counter2Component } from './counter2.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';
import { MultiPipe } from './multi.pipe';
import { SmartComponent } from './smart.component';
import { DumbComponent } from './dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component,
    IsVisibleDirective,
    MakeBiggerDirective,
    MultiPipe,
    SmartComponent,
    DumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
