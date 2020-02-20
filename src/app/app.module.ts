import { TopComponent } from './top/top.component';
import { ResultComponent } from './result/result.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { MergeUserPipe } from './merge-user.pipe';
import { MergeArticlePipe } from './merge-article.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    TopComponent,
    ResultComponent,
    MergeUserPipe,
    MergeArticlePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgAisModule.forRoot(),
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: TopComponent
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
