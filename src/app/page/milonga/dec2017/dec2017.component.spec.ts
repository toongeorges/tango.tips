import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec2017Component } from './dec2017.component';

describe('Dec2017Component', () => {
  let component: Dec2017Component;
  let fixture: ComponentFixture<Dec2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dec2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dec2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
