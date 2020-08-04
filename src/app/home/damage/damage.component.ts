import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnInit {
  damage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onRateChanged(value: number) {
    this.damage = value;
  }
}
