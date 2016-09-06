import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-product-search',
  templateUrl: 'product-search.component.html',
  styleUrls: ['product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  @Input() count : number;
  @Output() searchName = new EventEmitter();

  lastSearchText : string = '';
  constructor() { }

  ngOnInit() {
  }

  searchData(value){
    if(value !== ''){
      this.lastSearchText = value;
      this.searchName.emit(value);
    }
  }
}
