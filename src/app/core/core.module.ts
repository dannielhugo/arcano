import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule,
    BarRatingModule,
  ],
  exports: [
    RatingComponent
  ]
})
export class CoreModule { }
