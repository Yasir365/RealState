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
    margin: 20,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
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
      image: '/assets/images/carousel/1.webp'
    },
    {
      id: '1',
      image: '/assets/images/carousel/2.webp'
    },
    {
      id: '2',
      image: '/assets/images/carousel/3.webp'
    },
    {
      id: '3',
      image: '/assets/images/carousel/4.webp'
    },
    {
      id: '4',
      image: '/assets/images/carousel/5.webp'
    },
    {
      id: '5',
      image: '/assets/images/carousel/6.webp'
    },
    {
      id: '6',
      image: '/assets/images/carousel/7.webp'
    },
  ]

}
