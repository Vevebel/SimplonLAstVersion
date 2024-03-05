import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesArticleComponent } from './listes-article.component';

describe('ListesArticleComponent', () => {
  let component: ListesArticleComponent;
  let fixture: ComponentFixture<ListesArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesArticleComponent]
    });
    fixture = TestBed.createComponent(ListesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
