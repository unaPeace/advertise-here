import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    this.contactForm = true;
  }

}
