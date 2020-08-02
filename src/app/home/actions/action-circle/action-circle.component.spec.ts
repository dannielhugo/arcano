import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCircleComponent } from './action-circle.component';

describe('ActionCircleComponent', () => {
  let component: ActionCircleComponent;
  let fixture: ComponentFixture<ActionCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
