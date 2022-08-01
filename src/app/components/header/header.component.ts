import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenu = false;
  contactForm = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  showMenu() {
    this.mobileMenu = true;
  }
  hideMenu() {
    this.mobileMenu = false;
  }

  showForm() {
    this.contactForm = true;
  }

  menuForm() {
    this.mobileMenu = false;
    this.contactForm = true;
  }
}
