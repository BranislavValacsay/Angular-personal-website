import { Component, ElementRef, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  constructor(private el: ElementRef, private meta: Meta) {}
  
  title = 'bv_personal';
  scroll: number = 0;

  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    
    // Set meta tags for robots and caching
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'googlebot', content: 'noindex, nofollow' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
      { 'http-equiv': 'Pragma', content: 'no-cache' },
      { 'http-equiv': 'Expires', content: '0' }
    ]);
  }

  ngAfterViewInit() {
    const scrollableDiv = this.el.nativeElement.querySelector('.scrollable-content');
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll(event: Event) {
    const scrollTop = (event.target as HTMLElement).scrollTop;
    console.log('Scroll event detected:', scrollTop);
  }
  
  onWindowScroll() {
    this.scroll = window.scrollY;
    console.log('Scroll event detected:', this.scroll);
  }
}
