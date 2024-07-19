import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // set of routing rules order matters. The Home and Notfound are in AppRoutingModule. Ordering is followed while resolving wildcharacters
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
