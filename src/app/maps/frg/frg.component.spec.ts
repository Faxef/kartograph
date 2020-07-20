import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrgComponent } from './frg.component';

describe('LargestStatesComponent', () => {
  let component: FrgComponent;
  let fixture: ComponentFixture<FrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
