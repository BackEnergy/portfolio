import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingEyesComponent } from './following-eyes.component';

describe('FollowingEyesComponent', () => {
  let component: FollowingEyesComponent;
  let fixture: ComponentFixture<FollowingEyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingEyesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
