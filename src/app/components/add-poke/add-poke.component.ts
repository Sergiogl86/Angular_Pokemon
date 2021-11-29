import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-add-poke',
  templateUrl: './add-poke.component.html',
  styleUrls: ['./add-poke.component.css'],
})
export class AddPokeComponent implements OnInit {
  constructor(private pokemonStore: StoreService) {}

  pokeForm: any | FormGroup;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pokeForm.value);
    this.pokemonStore.addPokemon(this.pokeForm.value);
  }
  ngOnInit(): void {
    this.pokeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
      ]),
      url: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.pokeForm.controls;
  }
}
