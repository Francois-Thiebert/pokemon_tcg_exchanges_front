import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePoposalComponent } from './exchange-poposal.component';

describe('ExchangePoposalComponent', () => {
  let component: ExchangePoposalComponent;
  let fixture: ComponentFixture<ExchangePoposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangePoposalComponent]
    });
    fixture = TestBed.createComponent(ExchangePoposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
