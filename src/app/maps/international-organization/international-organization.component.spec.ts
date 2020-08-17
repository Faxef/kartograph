import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalOrganizationComponent } from './international-organization.component';

describe('LargestStatesComponent', () => {
  let component: InternationalOrganizationComponent;
  let fixture: ComponentFixture<InternationalOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
