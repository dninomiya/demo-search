import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite/';
import { Router } from '@angular/router';
import { SearchParameters } from 'angular-instantsearch/instantsearch/instantsearch';
import { environment } from 'src/environments/environment';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.apiKey
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

  config = {
    indexName: 'pokemons',
    searchClient
  };

  isDevMode = !environment.production;

  constructor(private router: Router) {}

  search(name: string) {
    this.router.navigate(['/result'], {
      queryParams: {
        name
      }
    });
  }
}
