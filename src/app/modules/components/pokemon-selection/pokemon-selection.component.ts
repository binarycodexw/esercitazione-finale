import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-selection',
  templateUrl: './pokemon-selection.component.html',
  styleUrls: ['./pokemon-selection.component.css']
})
export class PokemonSelectionComponent implements OnInit {
  @Output() captured = new EventEmitter<Pokemon>();
  @Output() rejected = new EventEmitter<Pokemon>();

  availablePokemon! : Pokemon;
  count: number = 0;

  clicked = false;

  constructor(private  service:PokemonService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData():void{
   this.service.getPokemon().subscribe((dataResponse) => this.availablePokemon = dataResponse)
  }

  choosePokemon():void{
    this.getData();
    this.captured.emit(this.availablePokemon);
    this.count++;
    if(this.count > 5){
      this.clicked = true;
    }
    
  }

  rejectPokemon():void{
    this.getData();
    this.rejected.emit(this.availablePokemon);
  }

 
}
