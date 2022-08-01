import { Component, Host, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-signage',
  templateUrl: './signage.component.html',
  styleUrls: ['./signage.component.scss']
})
export class SignageComponent implements OnInit {
  navBarFixed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.navBarFixed = true;
    } else {
      this.navBarFixed = false;
    }
  }

}
