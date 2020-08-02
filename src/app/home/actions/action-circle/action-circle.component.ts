import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-circle',
  templateUrl: './action-circle.component.html',
  styleUrls: ['./action-circle.component.scss']
})
export class ActionCircleComponent implements OnInit {
  @Input() number: number;
  @Input() color: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
