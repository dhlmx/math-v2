import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { ExpansionPipe } from '../pipes/expansion.pipe';
import { SetPipe } from '../pipes/set.pipe';
// import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [
    ExpansionPipe,
    SetPipe
  ],
  imports: [
    CommonModule
//    NgxGraphModule
  ],
  exports: [
//    NgxGraphModule,
    ExpansionPipe,
    SetPipe
  ]
})
export class SharedModule { }
