import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetimesComponent } from './practicetimes.component';

describe('PracticetimesComponent', () => {
  let component: PracticetimesComponent;
  let fixture: ComponentFixture<PracticetimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticetimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticetimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
