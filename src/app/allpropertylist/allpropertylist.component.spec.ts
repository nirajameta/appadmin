import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpropertylistComponent } from './allpropertylist.component';

describe('AllpropertylistComponent', () => {
  let component: AllpropertylistComponent;
  let fixture: ComponentFixture<AllpropertylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpropertylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpropertylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
