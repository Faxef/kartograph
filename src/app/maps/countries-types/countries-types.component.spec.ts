import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesTypesComponent } from './countries-types.component';

describe('LargestStatesComponent', () => {
  let component: CountriesTypesComponent;
  let fixture: ComponentFixture<CountriesTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
