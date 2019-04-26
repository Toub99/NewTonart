import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminModalComponent } from './termin-modal.component';

describe('TerminModalComponent', () => {
  let component: TerminModalComponent;
  let fixture: ComponentFixture<TerminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
