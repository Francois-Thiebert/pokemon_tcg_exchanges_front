import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishCardsComponent } from './wish-cards.component';

describe('WishCardsComponent', () => {
  let component: WishCardsComponent;
  let fixture: ComponentFixture<WishCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishCardsComponent]
    });
    fixture = TestBed.createComponent(WishCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
