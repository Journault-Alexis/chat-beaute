import { TestBed, inject } from '@angular/core/testing';

import { CatService } from './shared/service/cat.service';

describe('CatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatService]
    });
  });

  it('should be created', inject([CatService], (service: CatService) => {
    expect(service).toBeTruthy();
  }));
});
