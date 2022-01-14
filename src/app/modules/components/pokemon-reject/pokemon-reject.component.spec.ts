import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRejectComponent } from './pokemon-reject.component';

describe('PokemonRejectComponent', () => {
  let component: PokemonRejectComponent;
  let fixture: ComponentFixture<PokemonRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
