import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-icon',
  template: `
    <i *ngIf="contactType === 'message'" class="fa fa-commenting"
      aria-hidden="true" (click)="handleSendMessage()"></i>
    <i *ngIf="contactType === 'call'" class="fa fa-phone"
      aria-hidden="true" (click)="handleSendCall()"></i>
  `
})
export class ContactIconComponent {
  @Input() phoneNumber : string;
  @Input() contactType : string;

  constructor() { }

  ngOnInit(){
  }

  handleSendMessage(){
    location.href="sms:"+this.phoneNumber;
  }

  handleSendCall(){
    location.href="tel:"+this.phoneNumber;
  }

}
