import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateTransferInitializerModule } from '@nguniversal/common';

@NgModule({
  imports: [
    AppModule,
    BrowserModule,
    StateTransferInitializerModule,
    BrowserTransferStateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
