import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajWishListComponent } from './maj-wish-list.component';

describe('MajWishListComponent', () => {
  let component: MajWishListComponent;
  let fixture: ComponentFixture<MajWishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MajWishListComponent]
    });
    fixture = TestBed.createComponent(MajWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
