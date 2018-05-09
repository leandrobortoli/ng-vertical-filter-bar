import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreModalComponent } from './show-more-modal.component';

describe('ShowMoreModalComponent', () => {
  let component: ShowMoreModalComponent;
  let fixture: ComponentFixture<ShowMoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
