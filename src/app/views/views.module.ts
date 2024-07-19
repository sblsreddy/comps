import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';


@NgModule({
  declarations: [
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],

  exports:[] // Removed Exporting ViewsHomeComponent outside views module
})
export class ViewsModule { }
