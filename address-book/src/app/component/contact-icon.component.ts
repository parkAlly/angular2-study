import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contactIcon',
  template: `
    <i *ngIf="contactType === 'message'" class="fa fa-commenting"
      aria-hidden="true" (click)="handleSendMessage($event)"></i>
    <i *ngIf="contactType === 'call'" class="fa fa-phone"
      aria-hidden="true" (click)="handleSendCall($event)"></i>
  `
})
export class ContactIconComponent {
  @Input() phoneNumber : string;
  @Input() contactType : string;

  constructor() { }

  ngOnInit(){
  }

  handleSendMessage($event:any){
    $event.stopPropagation();
    location.href="sms:"+this.phoneNumber;
  }

  handleSendCall($event:any){
    $event.stopPropagation();
    location.href="tel:"+this.phoneNumber;
  }

}
