import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesMedecinComponent } from './listes-medecin.component';

describe('ListesMedecinComponent', () => {
  let component: ListesMedecinComponent;
  let fixture: ComponentFixture<ListesMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesMedecinComponent]
    });
    fixture = TestBed.createComponent(ListesMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
