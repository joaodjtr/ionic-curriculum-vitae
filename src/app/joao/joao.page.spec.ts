import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoaoPage } from './joao.page';

describe('JoaoPage', () => {
  let component: JoaoPage;
  let fixture: ComponentFixture<JoaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
