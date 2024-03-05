import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestRendezVousComponent } from './gest-rendez-vous.component';

describe('GestRendezVousComponent', () => {
  let component: GestRendezVousComponent;
  let fixture: ComponentFixture<GestRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestRendezVousComponent]
    });
    fixture = TestBed.createComponent(GestRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
