import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpExchangeComponent } from './help-exchange.component';

describe('HelpExchangeComponent', () => {
  let component: HelpExchangeComponent;
  let fixture: ComponentFixture<HelpExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpExchangeComponent]
    });
    fixture = TestBed.createComponent(HelpExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
