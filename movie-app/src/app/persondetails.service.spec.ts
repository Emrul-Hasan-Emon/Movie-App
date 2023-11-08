import { TestBed } from '@angular/core/testing';

import { PersondetailsService } from './persondetails.service';

describe('PersondetailsService', () => {
  let service: PersondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
