import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestutilisateursComponent } from './gestutilisateurs.component';

describe('GestutilisateursComponent', () => {
  let component: GestutilisateursComponent;
  let fixture: ComponentFixture<GestutilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestutilisateursComponent]
    });
    fixture = TestBed.createComponent(GestutilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
