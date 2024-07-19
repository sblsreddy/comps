import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { ViewsModule } from './views/views.module';
import { ModsModule } from './mods/mods.module';
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
    AppRoutingModule,
    ElementsModule,  //Import the whole module ElementsModule ( not just the component) so it can be used anywhere/public in project
    CollectionsModule,//Import the whole module CollectionsModule ( not just the component) so it can be used anywhere/public in project
    ViewsModule, //Import ViewsModule
    ModsModule //Import ModsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
