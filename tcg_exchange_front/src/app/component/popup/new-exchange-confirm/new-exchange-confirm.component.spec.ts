import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExchangeConfirmComponent } from './new-exchange-confirm.component';

describe('NewExchangeConfirmComponent', () => {
  let component: NewExchangeConfirmComponent;
  let fixture: ComponentFixture<NewExchangeConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExchangeConfirmComponent]
    });
    fixture = TestBed.createComponent(NewExchangeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
