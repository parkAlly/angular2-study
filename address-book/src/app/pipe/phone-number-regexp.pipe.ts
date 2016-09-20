import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneRegExp',
  pure: false
})
export class phoneRegExpPipe implements PipeTransform {
  transform(phoneNumber : string){
    return phoneNumber ? phoneNumber.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3") : null;
  }
}

/* 폰번호  - 넣어줌 */
