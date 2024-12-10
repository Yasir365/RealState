import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-token-commitment',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './token-commitment.component.html',
  styleUrls: ['./token-commitment.component.scss']
})
export class TokenCommitmentComponent {

}
