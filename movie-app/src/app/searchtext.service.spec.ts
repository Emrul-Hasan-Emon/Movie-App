import { TestBed } from '@angular/core/testing';

import { SearchtextService } from './searchtext.service';

describe('SearchtextService', () => {
  let service: SearchtextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchtextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
