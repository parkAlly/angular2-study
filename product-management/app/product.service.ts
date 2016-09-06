import { Injectable } from '@angular/core';
import { PRODUCTS } from './product-data';

@Injectable()
export class ProductService {

  _product : any[] = PRODUCTS;

  constructor() {}

  getProduct(){
    return  Promise.resolve(PRODUCTS);
  }

  setAddProduct(name : string, count : number){
    let tempObj = { id : this._product.length, name : name, count : count};
    this._product.push(tempObj);
    console.log(tempObj);
    return this._product;
  }

  setProductItemCount(type: string, id: number){
    if(type === 'Add'){
      this._product[id-1].count > 9 ? alert('더이상 추가할 수 없습니다.') : ++this._product[id-1].count;
    }else{
      this._product[id-1].count < 1 ? alert('더이상 삭제할 수 없습니다.') : --this._product[id-1].count;
    }
  }

  getProductItemCount(text: string){
    let tempCount = 0;
    this._product.map(item => {
      if(item.name === text){
        tempCount = item.count;
      }
    });

    return tempCount;
  }
}
