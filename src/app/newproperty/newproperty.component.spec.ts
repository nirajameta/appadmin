import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpropertyComponent } from './newproperty.component';

describe('NewpropertyComponent', () => {
  let component: NewpropertyComponent;
  let fixture: ComponentFixture<NewpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
