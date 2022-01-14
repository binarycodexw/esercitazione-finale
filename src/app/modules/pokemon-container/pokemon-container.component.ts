import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon-interfaces';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {

  pokemonCaptured : Pokemon[] = [];
  pokemonRejected : Pokemon[] = [];

  

  constructor() { }

  ngOnInit(): void {
  }

  capturedPokemon(pokemon:Pokemon):void{
    this.pokemonCaptured.push(pokemon);
  }

  rejectedPokemon(pokemon:Pokemon):void{
    this.pokemonRejected.push(pokemon);
  }

}
