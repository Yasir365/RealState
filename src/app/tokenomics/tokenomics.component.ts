import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-tokenomics',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent {

}
