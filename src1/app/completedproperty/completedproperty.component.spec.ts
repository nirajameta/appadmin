import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedpropertyComponent } from './completedproperty.component';

describe('CompletedpropertyComponent', () => {
  let component: CompletedpropertyComponent;
  let fixture: ComponentFixture<CompletedpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
