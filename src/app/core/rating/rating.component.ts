import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const CLEAN_STAR = 'star_border';
const FULL_STAR = 'star';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rate: number;
	@Input() max = 5;
	@Output() rateChanged = new EventEmitter();

  range = [];
  marked = -1;

  iconNames: string[] = [];

	constructor() { }

	ngOnInit() {
    for (let i = 0; i < this.max; i++) {
      this.range.push(i);
      this.iconNames.push(CLEAN_STAR);
    }
  }

  mark(index: number) {
    this.marked = this.marked === index ? index - 1 : index;
    this.rate = this.marked + 1;

    this.checkStars(this.marked);

    this.rateChanged.next(this.rate);
  }

  checkStars(marked: number) {
    for (let i = 0; i < this.max; i++) {
      if (i <= marked) {
        this.iconNames[i] = FULL_STAR;
      } else {
        this.iconNames[i] = CLEAN_STAR;
      }
    }
  }

}
