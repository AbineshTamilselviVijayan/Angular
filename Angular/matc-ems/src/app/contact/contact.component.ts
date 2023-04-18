import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  contactMail = '';
  contactMobile = '';
  contactSubmitStatus = true;

  coSubmitStatus() {
    if (this.contactMail != '' && this.contactMobile != '') {
      this.contactSubmitStatus = false;
    } else {
      this.contactSubmitStatus = true;
    }
  }
}