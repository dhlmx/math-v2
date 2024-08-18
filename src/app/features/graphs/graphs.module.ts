import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { SharedModule } from '../../core/modules/shared.module';
import { ColorComponent } from './color/color.component';


@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    SharedModule
  ]
})
export class GraphsModule { }
