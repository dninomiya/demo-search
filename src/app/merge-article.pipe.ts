import { ArticleService } from './article.service';
import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Pipe({
  name: 'mergeArticle'
})
export class MergeArticlePipe implements PipeTransform {
  constructor(private articleService: ArticleService) {}

  transform(slimArticles: any[]): any {
    const ids = slimArticles.map(article => article.id);
    return this.articleService.getMergedArticles(ids);
  }
}
