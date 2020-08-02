import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  attributes: string[] = ['Braveza', 'Esperteza', 'Estranheza', 'Firmeza', 'Sutileza'];

  descriptions: string[] = [
    'Partir pra porrada. Proteger alguém',
    'Investigar um mistério. Perceber uma enrascada',
    'Usar magia',
    'Agir sob pressão. Dar uma mão',
    'Manipular alguém',
  ];

  values: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.values = this.attributes.map(() => 0);
  }

}
