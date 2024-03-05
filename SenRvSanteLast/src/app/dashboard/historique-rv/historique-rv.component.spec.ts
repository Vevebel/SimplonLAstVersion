import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRvComponent } from './historique-rv.component';

describe('HistoriqueRvComponent', () => {
  let component: HistoriqueRvComponent;
  let fixture: ComponentFixture<HistoriqueRvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueRvComponent]
    });
    fixture = TestBed.createComponent(HistoriqueRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
