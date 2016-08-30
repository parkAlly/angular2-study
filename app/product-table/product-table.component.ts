import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../product-interface';
@Component({
  moduleId: module.id,
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html',
  styleUrls: ['product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  @Input() data: ProductInterface[];
  @Output() itemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(){}

  onItemEvent(e, id, type){
    this.itemEvent.emit({type:type, id:id});
  }
}
