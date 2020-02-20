import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() {}

  getArticle(id: string): Observable<any> {
    return of({
      title: 'xxxx',
      body: 'xxxx'
    });
  }

  getMergedArticles(ids: string) {
    // Firestoreから記事一覧を取得
    // Firestoreから記事一覧を取得
  }
}
