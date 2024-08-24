import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineLearningRoutingModule } from './machine-learning-routing.module';
import { SharedModule } from '../../core/modules/shared.module';
import { KMeansComponent } from './k-means/k-means.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';

@NgModule({
  declarations: [
    KMeansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MachineLearningRoutingModule,
    CoreModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class MachineLearningModule { }
