import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
