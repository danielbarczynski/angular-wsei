import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SmallReportComponent } from './small-report/small-report.component';
import { MediumReportComponent } from './medium-report/medium-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SmallReportComponent,
    MediumReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
