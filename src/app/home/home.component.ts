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
  activeIndex: number | null = null;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    slideTransition: 'linear',
    margin: 10,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      525: {
        items: 3,
      },
      768: {
        items: 5
      }
    },
  }

  carouselData = [
    {
      id: '1',
      image: '/assets/images/stock/1.jpg'
    },
    {
      id: '2',
      image: '/assets/images/stock/2.jpg'
    },
    {
      id: '3',
      image: '/assets/images/stock/3.jpg'
    },
    {
      id: '4',
      image: '/assets/images/stock/4.jpg'
    },
    {
      id: '5',
      image: '/assets/images/stock/5.jpg'
    },
    {
      id: '6',
      image: '/assets/images/stock/6.jpg'
    },
    {
      id: '7',
      image: '/assets/images/stock/7.jpg'
    },
    {
      id: '8',
      image: '/assets/images/stock/8.jpg'
    },
    {
      id: '9',
      image: '/assets/images/stock/9.jpg'
    },
    {
      id: '10',
      image: '/assets/images/stock/10.jpg'
    },
    {
      id: '11',
      image: '/assets/images/stock/11.jpg'
    },
    {
      id: '12',
      image: '/assets/images/stock/12.jpg'
    },
    {
      id: '13',
      image: '/assets/images/stock/13.jpg'
    },
    {
      id: '14',
      image: '/assets/images/stock/14.jpg'
    },
    {
      id: '15',
      image: '/assets/images/stock/15.jpg'
    },
    {
      id: '16',
      image: '/assets/images/stock/16.jpg'
    },
    {
      id: '17',
      image: '/assets/images/stock/17.jpg'
    },
    {
      id: '18',
      image: '/assets/images/stock/18.jpg'
    },
    {
      id: '19',
      image: '/assets/images/stock/19.jpg'
    },
    {
      id: '20',
      image: '/assets/images/stock/20.jpg'
    }
  ];


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
    {
      name: 'What is NOT REAL?',
      description: 'REAL is not ownership of property, assets, or securities. It does not promise profits, grant access to external assets, or serve as a substitute for real estate ownership. Its sole purpose is to provide DAO membership and participation.'
    }
  ];


  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  openAccordion(index: number): void {
    this.activeIndex = index;
  }

  closeAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    }
  }
}
