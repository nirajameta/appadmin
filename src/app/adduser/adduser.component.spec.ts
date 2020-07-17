import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpertComponent } from './adduser.component';

describe('AddexpertComponent', () => {
  let component: AddexpertComponent;
  let fixture: ComponentFixture<AddexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
