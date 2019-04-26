import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustavoPage } from './gustavo.page';

describe('GustavoPage', () => {
  let component: GustavoPage;
  let fixture: ComponentFixture<GustavoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustavoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustavoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
