import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedecinComponent } from './detail-medecin.component';

describe('DetailMedecinComponent', () => {
  let component: DetailMedecinComponent;
  let fixture: ComponentFixture<DetailMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMedecinComponent]
    });
    fixture = TestBed.createComponent(DetailMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
