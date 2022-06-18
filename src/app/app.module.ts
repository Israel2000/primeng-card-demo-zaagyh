import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    TableModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
