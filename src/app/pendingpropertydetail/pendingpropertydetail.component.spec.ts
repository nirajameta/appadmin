import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydetailComponent } from './pendingpropertydetail.component';

describe('PropertydetailComponent', () => {
  let component: PropertydetailComponent;
  let fixture: ComponentFixture<PropertydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
