import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite/';
import {
  InstantSearchConfig,
  SearchClient,
  SearchParameters
} from 'angular-instantsearch/instantsearch/instantsearch';

const searchClient = algoliasearch(
  'CQ04MZASL7',
  '5caf57ddaea6361a3d2edf12ab3167e4'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputParams: SearchParameters = {
    hitsPerPage: 5
  };

  resultParams = {
    hitsPerPage: 5,
    page: 0,
    query: 'リ'
  };

  config = {
    indexName: 'pokemons',
    searchClient
  };

  search(value) {
    const url = location.href;
    console.log(url + '?name=' + value);
  }

  nextPage() {
    this.resultParams.page++;
  }
}
