import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { NoPageToDisplayComponent } from './no-page-to-display/no-page-to-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BooksComponent,
    NoPageToDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
