import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationExchangeComponent } from './validation-exchange.component';

describe('ValidationExchangeComponent', () => {
  let component: ValidationExchangeComponent;
  let fixture: ComponentFixture<ValidationExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationExchangeComponent]
    });
    fixture = TestBed.createComponent(ValidationExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
