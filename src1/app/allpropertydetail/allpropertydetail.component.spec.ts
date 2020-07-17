import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpropertydetailComponent } from './allpropertydetail.component';

describe('AllpropertydetailComponent', () => {
  let component: AllpropertydetailComponent;
  let fixture: ComponentFixture<AllpropertydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpropertydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpropertydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
