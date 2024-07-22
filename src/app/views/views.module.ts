import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StasticsComponent } from './stastics/stastics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    ViewsHomeComponent,
    StasticsComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],

  exports:[] // Removed Exporting ViewsHomeComponent outside views module
})
export class ViewsModule { }
