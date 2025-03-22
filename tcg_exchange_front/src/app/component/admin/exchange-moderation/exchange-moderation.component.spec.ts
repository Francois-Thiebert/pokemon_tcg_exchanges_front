import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeModerationComponent } from './exchange-moderation.component';

describe('ExchangeModerationComponent', () => {
  let component: ExchangeModerationComponent;
  let fixture: ComponentFixture<ExchangeModerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeModerationComponent]
    });
    fixture = TestBed.createComponent(ExchangeModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
