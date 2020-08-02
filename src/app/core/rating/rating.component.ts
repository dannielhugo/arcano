import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rate: number = 0;

  @Input() max = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
