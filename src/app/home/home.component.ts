import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterLink, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    stagePadding: 10,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      }
    }
  }

  carouselData = [
    {
      id: '0',
      image: '/assets/images/carousel/1.jpg'
    },
    {
      id: '1',
      image: '/assets/images/carousel/2.jpg'
    },
    {
      id: '2',
      image: '/assets/images/carousel/3.jpg'
    },
    {
      id: '3',
      image: '/assets/images/carousel/4.jpg'
    },
    {
      id: '4',
      image: '/assets/images/carousel/5.jpg'
    },
    {
      id: '5',
      image: '/assets/images/carousel/6.jpg'
    },
    {
      id: '6',
      image: '/assets/images/carousel/7.jpg'
    },
  ]

}
