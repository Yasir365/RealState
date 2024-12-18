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

  factions = [
    {
      name: 'What is REAL?',
      description: 'The Real Estate Alliance League (REAL) is a community-driven real estate Decentralized Autonomous Organization (DAO) where members collaborate, learn, and contribute to the organization’s growth and vision.',
    },
    {
      name: 'What makes REAL unique?',
      description: 'REAL operates as a deflationary crypto utility token on the Ethereum blockchain, offering security and transparency through its network. There are no membership fees; holding REAL tokens automatically grants membership, with benefits increasing based on the number of tokens held.',
    },
    {
      name: 'How does REAL operate?',
      description: 'REAL focuses on acquiring and managing real estate rental properties. These properties provide ongoing support to the organization and its members through their continuous contribution to the ecosystem.',
    },
    {
      name: 'What is Token Burn, and why is it important?',
      description: 'REAL employs a process called "Token Burn," where tokens are purchased from the open market and permanently removed. This mechanism enhances the exclusivity of membership and aligns with the project’s long-term vision.',
    },
    {
      name: 'Why should you choose REAL?',
      description: 'REAL combines cutting-edge blockchain technology with a community-driven approach, creating an innovative platform backed by active participation and shared goals.',
    },
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
