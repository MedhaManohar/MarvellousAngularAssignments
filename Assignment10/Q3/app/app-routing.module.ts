import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { NoPageToDisplayComponent } from './no-page-to-display/no-page-to-display.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path:'Technology',component:TechnologyComponent}
  ,{path:'Books',component:BooksComponent}
  ,{path:'Home',component:DefaultComponent}
  ,{path:'',component:DefaultComponent}
  ,{path:'**',component:NoPageToDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
