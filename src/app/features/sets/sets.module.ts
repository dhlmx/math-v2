import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SetsRoutingModule } from './sets-routing.module';
import { SharedModule } from '../../core/modules/shared.module';

// Components
import { OperationsComponent } from './operations/operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { PrimeNgModule } from '../../core/modules/prime-ng.module';

@NgModule({
    declarations: [
        OperationsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SetsRoutingModule,
        CoreModule,
        PrimeNgModule,
        SharedModule
    ]
})
export class SetsModule { }
