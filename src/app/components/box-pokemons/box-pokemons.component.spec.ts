import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPokemonsComponent } from './box-pokemons.component';

describe('BoxPokemonsComponent', () => {
  let component: BoxPokemonsComponent;
  let fixture: ComponentFixture<BoxPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
