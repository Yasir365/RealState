import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  windowWidth: number = window.innerWidth;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  closeNavbar() {
    if (this.windowWidth < 992) {
      const navbarContent = this.elementRef.nativeElement.querySelector('#navbarContent');
      if (navbarContent && navbarContent.classList.contains('show')) {
        navbarContent.classList.remove('show');
      }
    }
  }
}
