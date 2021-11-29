import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { Pokemon } from '../interfaces/pokemon.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private arrayPokemonsPrivada = new BehaviorSubject<Pokemon[]>([
    { name: 'hola', url: 'Algo mas' },
  ]);

  public readonly arrayPokemonsPublica: Observable<Pokemon[]> =
    this.arrayPokemonsPrivada.asObservable();

  constructor(private pokemonSvc: ServiceService) {}

  getpokemonsStore1() {
    this.pokemonSvc.getpokemon1().subscribe({
      next: (res) => this.arrayPokemonsPrivada.next(res.results),
      error: (e) => console.error('Error ->', e),
      complete: () => console.info('complete'),
    });
  }
  getpokemonsStore2() {
    this.pokemonSvc.getpokemon2().subscribe({
      next: (res) => this.arrayPokemonsPrivada.next(res),
      error: (e) => console.error('Error ->', e),
      complete: () => console.info('complete'),
    });
  }

  addPokemon(pokemon: {}) {
    this.pokemonSvc.postPokemon(pokemon).subscribe({
      // next: (res) =>
      //   this.arrayPokemonsPrivada.next([
      //     ...this.arrayPokemonsPrivada.getValue(),
      //     res,
      //   ]),
      next: () => this.getpokemonsStore2(),
      error: (e) => console.error('Error ->', e),
      complete: () => console.info('complete'),
    });
  }
}
