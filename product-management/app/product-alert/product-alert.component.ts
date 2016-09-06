import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../product-interface';

// pipe
import { SoldoutAlertPipe } from '../soldout-alert.pipe';
@Component({
  moduleId: module.id,
  selector: 'app-product-alert',
  templateUrl: 'product-alert.component.html',
  styleUrls: ['product-alert.component.css'],
  pipes:[SoldoutAlertPipe]
})
export class ProductAlertComponent implements OnInit {
  @Input() data: ProductInterface[];
  limit : number = 0;
  constructor() { }

  ngOnInit() {
  }

}
