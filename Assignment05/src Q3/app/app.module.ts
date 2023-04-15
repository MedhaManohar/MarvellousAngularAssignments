import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
