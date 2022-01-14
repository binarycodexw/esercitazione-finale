import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainerComponent } from '../modules/pokemon-container/pokemon-container.component';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  {path: '', component: PokemonComponent,
  children: [
    {path:'', component:PokemonContainerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
