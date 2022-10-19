import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advertise-here';
  
  topScroll(){
    window.scroll(0,0);
  }

  constructor() {}
  ngOnInit(): void {}
}
