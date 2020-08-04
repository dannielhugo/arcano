import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rate: number = 0;

  @Input() max = 4;

  @Output() rateChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onRateChanged() {
    this.rateChanged.emit(this.rate);
  }
}
