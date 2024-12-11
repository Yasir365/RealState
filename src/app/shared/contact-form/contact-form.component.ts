import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  serviceID = 'service_i4ydub9';  
  templateID = 'template_504xfje';
  publicKey = 'UMljUzlyM80ldsi4x';
  submitLoader = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
    this.submitLoader = true;

      emailjs
      .send(this.serviceID, this.templateID, this.contactForm.getRawValue(), this.publicKey)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          this.contactForm.reset();
          this.submitLoader = false;
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Failed to send email.', error);
          this.submitLoader = false;
          alert('Failed to send email. Please try again later.');
        }
      );
    }
  }
}
