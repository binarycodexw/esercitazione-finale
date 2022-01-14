import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-interfaces';

@Component({
  selector: 'app-pokemon-reject',
  templateUrl: './pokemon-reject.component.html',
  styleUrls: ['./pokemon-reject.component.css']
})
export class PokemonRejectComponent implements OnInit {
  @Input() pokemons!: Pokemon[];



  constructor() { }

  ngOnInit(): void {
  }

}
