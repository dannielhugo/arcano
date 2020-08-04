import { Component, OnInit } from '@angular/core';

interface EquipCheckbox {
  title: string;
  value: boolean;
}

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  equips: EquipCheckbox[] = [
    {
      title: 'Revólver velho [2-dano perto recarga barulhenta]',
      value: false,
    },
    {
      title: 'Faca ritualística [1-dano contato]',
      value: false,
    },
    {
      title: 'Espada herdada [2-dano contato brutal]',
      value: false,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
