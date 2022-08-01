import { Component, Host, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
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
