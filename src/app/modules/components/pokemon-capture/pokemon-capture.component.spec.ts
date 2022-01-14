import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCaptureComponent } from './pokemon-capture.component';

describe('PokemonCaptureComponent', () => {
  let component: PokemonCaptureComponent;
  let fixture: ComponentFixture<PokemonCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
