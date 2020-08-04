import { Component, OnInit, OnDestroy } from '@angular/core';

import { Attributes, AttributesService } from '../../services/attributes.service';
import { Subscription } from 'rxjs';

interface AttributeObject {
  name: string;
  value: string;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit, OnDestroy {
  attributes: AttributeObject[] = [
    {
      name: 'Braveza',
      value: 'bravery'
    },
    {
      name: 'Esperteza',
      value: 'cunning',
    },
    {
      name: 'Estranheza',
      value: 'strangeness',
    },
    {
      name: 'Firmeza',
      value: 'firmness',
    },
    {
      name: 'Sutileza',
      value: 'subtlety'
    },
  ];

  descriptions: string[] = [
    'Partir pra porrada. Proteger alguém',
    'Investigar um mistério. Perceber uma enrascada',
    'Usar magia',
    'Agir sob pressão. Dar uma mão',
    'Manipular alguém',
  ];

  values: Attributes;

  attributesChangedSubscription: Subscription;

  constructor(private attributesService: AttributesService) { }

  ngOnInit(): void {
    this.values = this.attributesService.getAttributes();

    console.log(this.values);


    this.attributesChangedSubscription = this.attributesService.attributeChanged
      .subscribe((attributes: Attributes) => this.values = attributes)
  }

  ngOnDestroy() {
    this.attributesChangedSubscription.unsubscribe();
  }
}
