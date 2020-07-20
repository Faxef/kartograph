import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalAreasComponent } from './historical-areas.component';

describe('LargestStatesComponent', () => {
  let component: HistoricalAreasComponent;
  let fixture: ComponentFixture<HistoricalAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
