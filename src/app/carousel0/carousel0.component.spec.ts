import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel0Component } from './carousel0.component';

describe('Carousel0Component', () => {
  let component: Carousel0Component;
  let fixture: ComponentFixture<Carousel0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
