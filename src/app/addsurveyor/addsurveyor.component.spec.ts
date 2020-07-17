import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsurveyorComponent } from './addsurveyor.component';

describe('AddsurveyorComponent', () => {
  let component: AddsurveyorComponent;
  let fixture: ComponentFixture<AddsurveyorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsurveyorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsurveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
