import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule  // Import the whole module ElementsModule ( not just the component) so it can be used anywhere/public in project
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
