import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-product-manage',
  templateUrl: 'product-manage.component.html',
  styleUrls: ['product-manage.component.css']
})
export class ProductManageComponent implements OnInit {
  @Output() addProductEvent = new EventEmitter();
  newName : string;
  newCount : number;

  constructor() { }

  ngOnInit() {
  }

  addProduct($event){
    this.addProductEvent.emit({name: this.newName, count: this.newCount});
    this.newName = null; this.newCount = null;
  }
}
