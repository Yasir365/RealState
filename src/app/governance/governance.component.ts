import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-governance',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent {

}
