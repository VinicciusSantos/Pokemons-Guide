import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaNaoEncontradaComponent } from './rota-nao-encontrada.component';

describe('RotaNaoEncontradaComponent', () => {
  let component: RotaNaoEncontradaComponent;
  let fixture: ComponentFixture<RotaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaNaoEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
