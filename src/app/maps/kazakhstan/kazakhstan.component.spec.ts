import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazakhstanComponent } from './kazakhstan.component';

describe('LargestStatesComponent', () => {
  let component: KazakhstanComponent;
  let fixture: ComponentFixture<KazakhstanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazakhstanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazakhstanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
