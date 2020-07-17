import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpropertyComponent } from './surveyorproperty.component';

describe('AllpropertyComponent', () => {
  let component: AllpropertyComponent;
  let fixture: ComponentFixture<AllpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
