import { Component, OnInit } from '@angular/core';

interface EquipCheckbox {
  title: string;
  value: number;
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
      value: 1,
    },
    {
      title: 'Faca ritualística [1-dano contato]',
      value: 2,
    },
    {
      title: 'Espada herdada [2-dano contato brutal]',
      value: 3,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
