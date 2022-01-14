import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-interfaces';

@Component({
  selector: 'app-pokemon-capture',
  templateUrl: './pokemon-capture.component.html',
  styleUrls: ['./pokemon-capture.component.css']
})
export class PokemonCaptureComponent implements OnInit {

 
  @Input() pokemons!:Pokemon[];

  constructor() { }

  ngOnInit(): void {
  }
}
