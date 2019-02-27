import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SlideComponent, SliderComponent],
  imports: [
    CommonModule
  ],
  exports: [SlideComponent, SliderComponent]
})
export class SliderModule { }
