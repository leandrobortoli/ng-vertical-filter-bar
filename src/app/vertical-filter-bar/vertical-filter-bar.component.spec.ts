import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalFilterBarComponent } from './vertical-filter-bar.component';

describe('VerticalFilterBarComponent', () => {
  let component: VerticalFilterBarComponent;
  let fixture: ComponentFixture<VerticalFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
