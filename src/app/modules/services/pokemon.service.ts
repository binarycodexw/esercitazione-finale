import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPokemon, Pokemon } from '../interfaces/pokemon-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly _http: HttpClient) { }

  getPokemon(): Observable<Pokemon> {
    const randomNum = Math.floor(Math.random() * 800);
    return this._http.get<IPokemon>(`${environment.apiUrl}${randomNum}`).pipe(
      map(response => Pokemon.pokemonResponse(response))
    )
  }
}