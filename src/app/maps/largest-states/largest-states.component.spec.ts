import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestStatesComponent } from './largest-states.component';

describe('LargestStatesComponent', () => {
  let component: LargestStatesComponent;
  let fixture: ComponentFixture<LargestStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargestStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargestStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
