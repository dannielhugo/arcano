import { Component, OnInit } from '@angular/core';


interface MovementsCheckbox {
  type: string;
  value: boolean;
}

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  movements: MovementsCheckbox[] = [
    {
      type: 'advanced magic training',
      value: false,
    },
    {
      type: 'magic reputation',
      value: false,
    },
    {
      type: 'enchanted vestiment',
      value: false,
    },
    {
      type: 'could be worse',
      value: false,
    },
    {
      type: 'forensic divination',
      value: false,
    },
    {
      type: 'give everything you got',
      value: false,
    },
    {
      type: 'not my fault',
      value: false,
    },
    {
      type: 'practitioner',
      value: false,
    },
    {
      type: 'magic shield',
      value: false,
    },
    {
      type: 'third eye',
      value: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
