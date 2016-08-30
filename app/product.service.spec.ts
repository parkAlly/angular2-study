/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('Service: Product', () => {
  beforeEach(() => {
    addProviders([ProductService]);
  });

  it('should ...',
    inject([ProductService],
      (service: ProductService) => {
        expect(service).toBeTruthy();
      }));
});
