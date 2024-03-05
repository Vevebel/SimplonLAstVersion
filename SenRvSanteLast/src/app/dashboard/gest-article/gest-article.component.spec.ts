import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestArticleComponent } from './gest-article.component';

describe('GestArticleComponent', () => {
  let component: GestArticleComponent;
  let fixture: ComponentFixture<GestArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestArticleComponent]
    });
    fixture = TestBed.createComponent(GestArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
