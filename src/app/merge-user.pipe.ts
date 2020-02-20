import { PokemonService } from './pokemon.service';
import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Pipe({
  name: 'mergeUser'
})
export class MergeUserPipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) {}

  transform(
    pokomens: {
      name: string;
    }[]
  ): Observable<any> {
    const trainers$ = pokomens.map(pokemon =>
      this.pokemonService.getTrainer(pokemon.name)
    );
    return combineLatest(trainers$).pipe(
      map(trainers =>
        trainers.map((trainer, index) => {
          return {
            ...pokomens[index],
            trainer
          };
        })
      ),
      tap(mergedData => console.log(mergedData))
    );
  }
}
