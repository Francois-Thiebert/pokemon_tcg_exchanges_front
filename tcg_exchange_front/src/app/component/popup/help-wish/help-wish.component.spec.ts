import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWishComponent } from './help-wish.component';

describe('HelpWishComponent', () => {
  let component: HelpWishComponent;
  let fixture: ComponentFixture<HelpWishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpWishComponent]
    });
    fixture = TestBed.createComponent(HelpWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
