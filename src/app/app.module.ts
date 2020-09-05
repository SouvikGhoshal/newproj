import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { Navlist2Component } from './navlist2/navlist2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavitemsComponent,
    Navlist2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
