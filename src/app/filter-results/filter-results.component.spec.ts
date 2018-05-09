import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResultsComponent } from './filterresults.component';

describe('FilterResultsComponent', () => {
  let component: FilterResultsComponent;
  let fixture: ComponentFixture<FilterResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
