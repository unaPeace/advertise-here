import { Component, Host, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  navBarFixed: boolean = false;

  constructor(private contentfulService: ContentfulService) { }

  blogPosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.navBarFixed = true;
    } else {
      this.navBarFixed = false;
    }
  }

}
