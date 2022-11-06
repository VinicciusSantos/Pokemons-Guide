import { Location } from '@angular/common';
import { mainRoutes } from './../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada.component';

describe('RotaNaoEncontradaComponent', () => {
  let component: RotaNaoEncontradaComponent;
  let fixture: ComponentFixture<RotaNaoEncontradaComponent>;
  let location: Location;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(mainRoutes)],
      declarations: [RotaNaoEncontradaComponent],
      providers: [{ provide: Router, useFactory: routerStub }],
    });

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(RotaNaoEncontradaComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`secondsUltilRedirect has default value`, () => {
    expect(component.secondsUltilRedirect).toEqual(5);
  });

  describe('deacreasesTime', () => {
    it('makes expected calls', () => {
      jest.spyOn(component, 'deacreasesTime');
      component.deacreasesTime();
      expect(component.deacreasesTime).toHaveBeenCalled();
    });

    it('should decreases the value', async () => {
      const previusValue = component.secondsUltilRedirect;
      component.deacreasesTime();
      setTimeout(() => {
        expect(component.secondsUltilRedirect).toEqual(previusValue - 1);
      }, 1100);
    });

    it('should redirect the user to main route when secondsUltilRedirect is 0', async () => {
      component.deacreasesTime();
      await new Promise(r => setTimeout(r, 5000));
      expect(location.path()).toBe('');
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      jest.spyOn(component, 'deacreasesTime');
      component.ngOnInit();
      expect(component.deacreasesTime).toHaveBeenCalled();
    });
  });
});
