import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],

  exports:[CollectionsHomeComponent] //Exporting CollectionsHomeComponent outside collections module so it can used whereever required
})
export class CollectionsModule { }
