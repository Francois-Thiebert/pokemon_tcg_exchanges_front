import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishExchangeComponent } from './finish-exchange.component';

describe('FinishExchangeComponent', () => {
  let component: FinishExchangeComponent;
  let fixture: ComponentFixture<FinishExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishExchangeComponent]
    });
    fixture = TestBed.createComponent(FinishExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
