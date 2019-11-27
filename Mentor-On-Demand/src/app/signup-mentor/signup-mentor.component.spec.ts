import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMentorComponent } from './signup-mentor.component';

describe('SignupMentorComponent', () => {
  let component: SignupMentorComponent;
  let fixture: ComponentFixture<SignupMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
