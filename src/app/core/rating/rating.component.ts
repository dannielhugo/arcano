import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const CLEAN_STAR = 'star_border';
const FULL_STAR = 'star';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  get rate(): number {
    return this._rate;
  }
  set rate(value: number) {
    this._rate = value;

    setTimeout(() => {
      this.marked = value - 1;

      this.checkStars(this.marked);
    }, 0)
  }

	@Input() max = 5;
	@Output() changed = new EventEmitter();

  range = [];
  marked = -1;

  iconNames: string[] = [];

  private _rate = 0;

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

    this.changed.next(this.rate);
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
