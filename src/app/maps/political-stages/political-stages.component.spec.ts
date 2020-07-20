import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalStagesComponent } from './political-stages.component';

describe('LargestStatesComponent', () => {
  let component: PoliticalStagesComponent;
  let fixture: ComponentFixture<PoliticalStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
