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

  //oleole ini
  pokemonsArrayOle$ = new BehaviorSubject<
    { id: string; name: string; url: string }[]
  >([]);
  //oleole fini

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

  //oleole ini
  //ojo xavales que aqui lo que va entre <> debería ser una interface, esto es una guarrada xD it works tho
  getpokemonsStore3(): Observable<{ id: string; name: string; url: string }[]> {
    return this.pokemonSvc.getpokemon2();
  }
  //oleole fini

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
