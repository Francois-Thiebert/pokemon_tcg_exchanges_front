import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGiveCardsComponent } from './to-give-cards.component';

describe('ToGiveCardsComponent', () => {
  let component: ToGiveCardsComponent;
  let fixture: ComponentFixture<ToGiveCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToGiveCardsComponent]
    });
    fixture = TestBed.createComponent(ToGiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
