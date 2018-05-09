import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordFilterComponent } from './keyword-filter.component';

describe('KeywordFilterComponent', () => {
  let component: KeywordFilterComponent;
  let fixture: ComponentFixture<KeywordFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
