import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterComponent } from './checkbox-filter.component';

describe('CheckboxFilterComponent', () => {
  let component: CheckboxFilterComponent;
  let fixture: ComponentFixture<CheckboxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
