import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertlistComponent } from './userlist.component';

describe('ExpertlistComponent', () => {
  let component: ExpertlistComponent;
  let fixture: ComponentFixture<ExpertlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
