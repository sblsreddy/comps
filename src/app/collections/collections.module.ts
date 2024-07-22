import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],

  //Removing component export because we are directly not using this component in any other module, we will use based on routing rule
})
export class CollectionsModule { }
