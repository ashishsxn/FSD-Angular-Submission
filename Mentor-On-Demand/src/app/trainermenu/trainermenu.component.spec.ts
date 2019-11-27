import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainermenuComponent } from './trainermenu.component';

describe('TrainermenuComponent', () => {
  let component: TrainermenuComponent;
  let fixture: ComponentFixture<TrainermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
