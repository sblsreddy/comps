import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'; 
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SegementComponent } from './segement/segement.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceHolderComponent,
    TimesDirective,
    SegementComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
],

  exports:[]  
})
export class ElementsModule { }
