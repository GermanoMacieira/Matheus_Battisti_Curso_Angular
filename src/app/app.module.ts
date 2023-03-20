import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { SecondCompFilhoComponent } from './components/second-comp-filho/second-comp-filho.component';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompFilhoComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
