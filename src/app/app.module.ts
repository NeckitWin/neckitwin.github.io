import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeckitwinComponent } from './neckitwin/neckitwin.component';

@NgModule({
  declarations: [
    AppComponent,
    NeckitwinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
