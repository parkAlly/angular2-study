import { Injectable }     from '@angular/core';
import { CanDeactivate }    from '@angular/router';

export interface CanComponentDeactivate {
 canDeactivate: () =>  boolean;
}

@Injectable()
export class CheckSave implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    let confirmValue = confirm("페이지를 이동하시겠습니까?");
    return confirmValue;
  }
}
