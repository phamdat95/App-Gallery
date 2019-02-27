import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {SlideComponent} from './slide/slide.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  component;
  activeIndex = 0;
  intervalid: number;

  constructor() {
  }

  ngOnInit() {
  }

  previous() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = 2;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  ngAfterContentInit() {
    console.log(this.slides);
    this.component = this.slides.first;
    this.start();
  }

  start() {
    this.intervalid = window.setInterval(() => {
      if (this.activeIndex < this.slides.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
      this.component = this.slides.toArray()[this.activeIndex];
    }, 1000);
  }
}
