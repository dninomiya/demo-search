import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const TRAINERS = {
  ミュウ: '山田ミュウ太郎',
  ミュウツー: 'インセプター羽賀'
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() {}

  getTrainer(pokemonName: string): Observable<string> {
    return of(TRAINERS[pokemonName] || 'サトシ');
  }
}
