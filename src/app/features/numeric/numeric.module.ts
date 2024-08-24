import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericRoutingModule } from './numeric-routing.module';
import { IntegersComponent } from './integers/integers.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';
import { SharedModule } from '../../core/modules/shared.module';

@NgModule({
  declarations: [
    IntegersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumericRoutingModule,
    CoreModule,
    PrimeNgModule,
    SharedModule
]
})
export class NumericModule { }
