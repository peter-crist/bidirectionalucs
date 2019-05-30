/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EndStateComponent } from './end-state.component';

describe('StartStateComponent', () => {
  let component: EndStateComponent;
  let fixture: ComponentFixture<EndStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
