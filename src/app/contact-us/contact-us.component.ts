import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  email1 = "info@bbdc.io"
  email2 = "support@bbdc.io"
}
