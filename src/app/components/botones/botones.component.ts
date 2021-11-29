import { Component } from '@angular/core';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent {
  constructor(private pokemonStore: StoreService) {}

  mostarArray1() {
    this.pokemonStore.getpokemonsStore1();
  }
  mostarArray2() {
    this.pokemonStore.getpokemonsStore2();
  }
}
