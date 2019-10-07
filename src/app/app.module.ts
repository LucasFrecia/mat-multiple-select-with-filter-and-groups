import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule, MatFormFieldModule} from '@angular/material';
import { MatSelectFilterModule } from 'mat-select-filter';

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    MatSelectModule, 
    MatFormFieldModule,
    MatSelectFilterModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

  
 }
