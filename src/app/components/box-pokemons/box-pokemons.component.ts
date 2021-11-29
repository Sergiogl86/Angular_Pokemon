import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-box-pokemons',
  templateUrl: './box-pokemons.component.html',
  styleUrls: ['./box-pokemons.component.css'],
})
export class BoxPokemonsComponent implements OnInit {
  //oleole ini
  pokis: { id: string; name: string; url: string }[] = [];
  //oleole fini

  pokemons$ = this.pokemonStore.arrayPokemonsPublica;
  constructor(private pokemonStore: StoreService) {}

  // oleole ini  (nginit inclos)
  ngOnInit(): void {
    this.getPokis();
  }
  getPokis(): void {
    this.pokemonStore
      .getpokemonsStore3()
      .subscribe((pokis) => (this.pokis = pokis));
  }
  //oleole fini
}
