import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent implements OnInit {
  selected: string = '';
  improvements: string[] = [
    'Receba +1 em Estranheza (máximo +3).',
    'Receba +1 em Firmeza (máximo +2).',
    'Receba +1 em Esperteza (máximo +2).',
    'Receba +1 em Braveza (máximo +2).',
    'Pegue outro movimento de Arcano.',
    'Pegue outro movimento de Arcano.',
    'Pegue um movimento de outra cartilha.',
    'Pegue um movimento de outra cartilha.',
    'Pegue outra escolha de Magia Combativa.',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
