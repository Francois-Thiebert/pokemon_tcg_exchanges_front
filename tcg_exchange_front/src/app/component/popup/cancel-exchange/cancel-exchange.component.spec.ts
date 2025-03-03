import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelExchangeComponent } from './cancel-exchange.component';

describe('CancelExchangeComponent', () => {
  let component: CancelExchangeComponent;
  let fixture: ComponentFixture<CancelExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelExchangeComponent]
    });
    fixture = TestBed.createComponent(CancelExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
