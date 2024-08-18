import { NgModule } from '@angular/core';

// Components & Pipes
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent,
    SharedModule
  ]
})
export class CoreModule { }
