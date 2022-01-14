import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSelectionComponent } from '../modules/components/pokemon-selection/pokemon-selection.component';
import { PokemonCaptureComponent } from '../modules/components/pokemon-capture/pokemon-capture.component';
import { PokemonRejectComponent } from '../modules/components/pokemon-reject/pokemon-reject.component';
import { PokemonContainerComponent } from '../modules/pokemon-container/pokemon-container.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonSelectionComponent,
    PokemonCaptureComponent,
    PokemonRejectComponent,
    PokemonContainerComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
