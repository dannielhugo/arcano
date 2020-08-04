import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedImprovementComponent } from './advanced-improvement.component';

describe('AdvancedImprovementComponent', () => {
  let component: AdvancedImprovementComponent;
  let fixture: ComponentFixture<AdvancedImprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedImprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
