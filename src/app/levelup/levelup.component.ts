import { Component, OnInit } from '@angular/core';

const TIME_TO_REFRESH = 2000;

@Component({
  selector: 'app-levelup',
  templateUrl: './levelup.component.html',
  styleUrls: ['./levelup.component.scss']
})
export class LevelupComponent implements OnInit {
  level: number = 1;
  exp: number = 0;

  showAdvancedImprovements = false;

  constructor() { }

  ngOnInit(): void {
  }

  levelUp() {
    this.level++;
    this.checkForAdvancedImprovements();
  }

  levelDown() {
    if (this.level > 1) {
      this.level--;
      this.checkForAdvancedImprovements();
    }
  }

  checkForAdvancedImprovements() {
    if (this.level % 5 === 0) {
      this.showAdvancedImprovements = true;
    } else {
      this.showAdvancedImprovements = false;
    }
  }

  onRateChanged(value: number) {
    this.exp = value;

    if (value === 5) {
      this.levelUp();

      setTimeout(() => {
        this.exp = 0;
      }, TIME_TO_REFRESH)
    }
  }
}
