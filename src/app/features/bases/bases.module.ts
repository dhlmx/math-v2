import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesRoutingModule } from './bases-routing.module';
import { ExpansionsComponent } from './expansions/expansions.component';
import { SharedModule } from '../../core/modules/shared.module';
import { CoreModule } from '../../core/core.module';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpansionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasesRoutingModule,
    CoreModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class BasesModule { }
