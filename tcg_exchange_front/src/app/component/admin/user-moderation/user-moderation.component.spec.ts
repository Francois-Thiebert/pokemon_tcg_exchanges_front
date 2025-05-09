import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModerationComponent } from './user-moderation.component';

describe('UserModerationComponent', () => {
  let component: UserModerationComponent;
  let fixture: ComponentFixture<UserModerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserModerationComponent]
    });
    fixture = TestBed.createComponent(UserModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
