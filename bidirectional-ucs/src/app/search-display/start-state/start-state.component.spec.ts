/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartStateComponent } from './start-state.component';

describe('StartStateComponent', () => {
  let component: StartStateComponent;
  let fixture: ComponentFixture<StartStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
