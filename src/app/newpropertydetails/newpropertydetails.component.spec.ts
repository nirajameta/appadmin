import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpropertydetailsComponent } from './newpropertydetails.component';

describe('NewpropertydetailsComponent', () => {
  let component: NewpropertydetailsComponent;
  let fixture: ComponentFixture<NewpropertydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpropertydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpropertydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
