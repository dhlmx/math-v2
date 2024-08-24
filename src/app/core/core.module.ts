import { NgModule } from '@angular/core';

// Components & Pipes
import { D3BarsComponent } from './components/d3/bars/d3-bars.component';
import { D3PieComponent } from './components/d3/pie/d3-pie.component';
import { D3TidyTreeComponent } from './components/d3/tidy-tree/d3-tidy-tree.component';
import { D3TreeComponent } from './components/d3/tree/d3-tree.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { D3RadialTreeComponent } from './components/d3/radial/d3-radial-tree.component';
import { D3LogScaleComponent } from './components/d3/log-scale/d3-log-scale.component';

@NgModule({
  declarations: [
    D3BarsComponent,
    D3LogScaleComponent,
    D3PieComponent,
    D3RadialTreeComponent,
    D3TidyTreeComponent,
    D3TreeComponent
  ],
  imports: [
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent
  ],
  exports: [
    D3BarsComponent,
    D3LogScaleComponent,
    D3PieComponent,
    D3RadialTreeComponent,
    D3TidyTreeComponent,
    D3TreeComponent,
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
