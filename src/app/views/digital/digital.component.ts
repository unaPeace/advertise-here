import { Component, Host, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {
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
