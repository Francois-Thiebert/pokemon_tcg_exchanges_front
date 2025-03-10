import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpToGiveComponent } from './help-to-give.component';

describe('HelpToGiveComponent', () => {
  let component: HelpToGiveComponent;
  let fixture: ComponentFixture<HelpToGiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpToGiveComponent]
    });
    fixture = TestBed.createComponent(HelpToGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
