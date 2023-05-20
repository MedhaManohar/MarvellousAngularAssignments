import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyaddPipe } from './myadd.pipe';
import { MumultPipe } from './mumult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyaddPipe,
    MumultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
