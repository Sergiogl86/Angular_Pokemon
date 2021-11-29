import { Component } from '@angular/core';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-box-pokemons',
  templateUrl: './box-pokemons.component.html',
  styleUrls: ['./box-pokemons.component.css'],
})
export class BoxPokemonsComponent {
  pokemons$ = this.pokemonStore.arrayPokemonsPublica;
  constructor(private pokemonStore: StoreService) {}
}
