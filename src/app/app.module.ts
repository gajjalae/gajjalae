import { MatExpansionModule } from '@angular/material/expansion';
import { Http, HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpService } from './../services/httpService';

import { AppComponent } from './app.component';
import { HolidayDetailsComponent } from './../pages/holiday-details/holiday-details';
import { HolidaysListComponent } from './../pages/holidays-list/holidays-list';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysListComponent,
    HolidayDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
