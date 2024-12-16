import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      message: ['']
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.submitLoader = true;

      emailjs
        .send(this.serviceID, this.templateID, this.contactForm.getRawValue(), this.publicKey)
        .then(
          (response) => {
            this.contactForm.reset();
            this.submitLoader = false;
            this.toastr.success('Email sent successfully!', "Success");
          },
          (error) => {
            this.toastr.error('Failed to send email.', "Success");
            this.submitLoader = false;
          }
        );
    }
  }
}
