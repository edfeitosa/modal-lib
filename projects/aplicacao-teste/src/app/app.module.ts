import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ModalModule } from '@modal/modal';
import { ModalModule } from '../../../modal/modal/src/lib/modal.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
