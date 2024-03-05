import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPlanningComponent } from './gest-planning.component';

describe('GestPlanningComponent', () => {
  let component: GestPlanningComponent;
  let fixture: ComponentFixture<GestPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestPlanningComponent]
    });
    fixture = TestBed.createComponent(GestPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
