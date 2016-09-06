import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from './product-interface';
@Pipe({
  name: 'soldoutAlert'
})
export class SoldoutAlertPipe implements PipeTransform {
  transform(product: ProductInterface[], limit : number){
     if(product){
       return product.filter(item => item.count < limit);
     }else {
       return product;
     }
  }
}
