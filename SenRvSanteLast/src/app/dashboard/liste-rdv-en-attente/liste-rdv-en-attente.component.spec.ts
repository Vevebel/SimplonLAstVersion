import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRdvEnAttenteComponent } from './liste-rdv-en-attente.component';

describe('ListeRdvEnAttenteComponent', () => {
  let component: ListeRdvEnAttenteComponent;
  let fixture: ComponentFixture<ListeRdvEnAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRdvEnAttenteComponent]
    });
    fixture = TestBed.createComponent(ListeRdvEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
