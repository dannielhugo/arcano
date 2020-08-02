import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatMagicComponent } from './combat-magic.component';

describe('CombatMagicComponent', () => {
  let component: CombatMagicComponent;
  let fixture: ComponentFixture<CombatMagicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatMagicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
