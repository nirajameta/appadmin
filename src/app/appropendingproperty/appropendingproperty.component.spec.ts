import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppropendingpropertyComponent } from './appropendingproperty.component';

describe('AppropendingpropertyComponent', () => {
  let component: AppropendingpropertyComponent;
  let fixture: ComponentFixture<AppropendingpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppropendingpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppropendingpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
