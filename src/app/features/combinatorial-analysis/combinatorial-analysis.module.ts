import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinatorialAnalysisRoutingModule } from './combinatorial-analysis-routing.module';
import { CombinationsComponent } from './combinations/combinations.component';
import { CoreModule } from '../../core/core.module';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CombinationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CombinatorialAnalysisRoutingModule,
    CoreModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class CombinatorialAnalysisModule { }
