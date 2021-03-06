import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchBox',
  styles:[`
    .search-area{
      padding : 5px;
      background-color : #d9d9d9;
    }

    #search {
      position: relative;
      font-size: 18px;
      padding-top: 10px;
      margin: -20px auto 0;
    }

    #search label{
      position: absolute;
      left: 20px;
      top: 14px;
    }

    #searchBox {
      display: block;
      width: 95%;
      height: 34px;
      padding: 6px 30px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 0 auto;
      border-radius: 45px;
    }

    #search #search-clear{
      ext-decoration: none;
      position: absolute;
      right: 20px;
      top: 18px;
      color: #b3b3b3;
    }

    `],
  template: `
    <div class="search-area col-md-12 col-sm-12 col-lg-12">
      <section id="search">
        <label for="searchBox">
          <i class="fa fa-search" aria-hidden="true"></i>
          <span class="sr-only">Search icons</span>
        </label>
        <input id="searchBox" class="form-control input-lg" placeholder="이름을 검색해주세요." (keyup)="handleSetName($event)" [(ngModel)]="_searchText">
        <a id="search-clear" class="fa fa-times-circle" aria-hidden="true" (click)="handleResetText($event)"><span class="sr-only">Clear search</span></a>
      </section>
    </div>
  `
})
export class SearchBoxComponent {
  @Output() handleSendName = new EventEmitter();
  _searchText : string;
  constructor() { }

  ngOnInit(){}

  handleSetName($event:any){
    this.handleSendName.emit($event.target.value);
  }

  handleResetText(){
    this._searchText = '';
    this.handleSendName.emit('');
  }

}
