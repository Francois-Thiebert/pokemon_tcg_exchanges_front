import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelExchangeValidationComponent } from './cancel-exchange-validation.component';

describe('CancelExchangeValidationComponent', () => {
  let component: CancelExchangeValidationComponent;
  let fixture: ComponentFixture<CancelExchangeValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelExchangeValidationComponent]
    });
    fixture = TestBed.createComponent(CancelExchangeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
