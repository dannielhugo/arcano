import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelup',
  templateUrl: './levelup.component.html',
  styleUrls: ['./levelup.component.scss']
})
export class LevelupComponent implements OnInit {
  level: number = 1;
  exp: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  levelUp() {
    this.level++;
  }

  levelDown() {
    if (this.level > 1) {
      this.level--;
    }
  }

  onRateChanged(value: number) {
    if (value === 5) {
      this.level++;
    }
  }
}
