import { TestBed } from '@angular/core/testing';

import { MoviedetailsService } from './moviedetails.service';

describe('MoviedetailsService', () => {
  let service: MoviedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
