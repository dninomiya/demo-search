import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';
import { SearchInputComponent } from './search-input/search-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SearchInputComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgAisModule.forRoot(),
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
