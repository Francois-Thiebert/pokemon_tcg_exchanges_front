import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExchangeValidationComponent } from './new-exchange-validation.component';

describe('NewExchangeValidationComponent', () => {
  let component: NewExchangeValidationComponent;
  let fixture: ComponentFixture<NewExchangeValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExchangeValidationComponent]
    });
    fixture = TestBed.createComponent(NewExchangeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
