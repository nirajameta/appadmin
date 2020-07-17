import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluteproComponent } from './evalutepro.component';

describe('EvaluteproComponent', () => {
  let component: EvaluteproComponent;
  let fixture: ComponentFixture<EvaluteproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluteproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluteproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
