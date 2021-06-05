import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionMaPComponent } from './direction-ma-p.component';

describe('DirectionMaPComponent', () => {
  let component: DirectionMaPComponent;
  let fixture: ComponentFixture<DirectionMaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionMaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionMaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
