import { Component, OnInit } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite/';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.apiKey
);

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  resultParams = {
    hitsPerPage: 5,
    page: 0,
    query: ''
  };

  config = {
    indexName: 'pokemons',
    searchClient
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(map => {
      this.resultParams.query = map.get('name');
    });
  }

  ngOnInit() {}

  nextPage() {
    this.resultParams.page++;
  }
}
