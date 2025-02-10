import { TestBed } from '@angular/core/testing';

import { IntercompoService } from './intercompo.service';

describe('IntercompoService', () => {
  let service: IntercompoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercompoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
