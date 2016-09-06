/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProductTableComponent } from './product-table.component';

describe('Component: ProductTable', () => {
  it('should create an instance', () => {
    let component = new ProductTableComponent();
    expect(component).toBeTruthy();
  });
});
