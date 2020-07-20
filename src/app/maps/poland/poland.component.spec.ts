import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolandComponent } from './poland.component';

describe('LargestStatesComponent', () => {
  let component: PolandComponent;
  let fixture: ComponentFixture<PolandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
