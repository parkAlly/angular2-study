import { Component, OnInit } from '@angular/core';

//component
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

//service
import { ProductService } from './product.service';

//interface
import { ProductInterface } from './product-interface';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProductTableComponent,ProductManageComponent,ProductAlertComponent,ProductSearchComponent],
  providers: [ProductService]
})


export class AppComponent {
  title = 'app works!';
  constructor(private productService: ProductService) {}

  _product : ProductInterface[];
  _count   : number = 0;

  ngOnInit(){
    this.getProductData();
  }

  getProductData(){
    this.productService.getProduct().then(products => {
     this._product = products;
     console.log(products);
    })
  }

  itemEvent($event){
    console.log($event);
    this.productService.setProductItemCount($event.type,$event.id);
  }

  searchEvent($event){
    this._count = this.productService.getProductItemCount($event);
  }

  addProductEvent($event){
    this._product = this.productService.setAddProduct($event.name, $event.count);
  }

  gotoDetail(link){
    console.log(link);
  }
}
