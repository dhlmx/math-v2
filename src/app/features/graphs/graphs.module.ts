import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { SharedModule } from '../../core/modules/shared.module';
import { ColorComponent } from './color/color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';


@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GraphsRoutingModule,
    CoreModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class GraphsModule { }
