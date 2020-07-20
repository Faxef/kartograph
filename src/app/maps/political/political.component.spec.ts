import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalComponent } from './political.component';

describe('PoliticalMapComponent', () => {
  let component: PoliticalComponent;
  let fixture: ComponentFixture<PoliticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
