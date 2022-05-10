import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoEjemploComponent } from './hijo-ejemplo.component';

describe('HijoEjemploComponent', () => {
  let component: HijoEjemploComponent;
  let fixture: ComponentFixture<HijoEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
