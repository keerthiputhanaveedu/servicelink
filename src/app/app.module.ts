import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { Nav3Component } from './nav3/nav3.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    Nav3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
