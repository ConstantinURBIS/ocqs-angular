/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Assigment3Component } from './assigment3.component';

describe('Assigment3Component', () => {
  let component: Assigment3Component;
  let fixture: ComponentFixture<Assigment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assigment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
