import { Injectable }     from '@angular/core';
import { CanDeactivate }    from '@angular/router';

export interface CanComponentDeactivate {
 canDeactivate: () =>  boolean;
}

@Injectable()
export class CheckSaveService implements CanDeactivate<CanComponentDeactivate> {
  _isChecked: boolean  = false;

  isCheckedSave(){
    this._isChecked = true;
  }

  canDeactivate(component: CanComponentDeactivate) {
    let confirmValue = this._isChecked ? this._isChecked : confirm("페이지를 이동하시겠습니까?");
    return confirmValue;
  }
}
