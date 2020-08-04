import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-improvement',
  templateUrl: './advanced-improvement.component.html',
  styleUrls: ['./advanced-improvement.component.scss']
})
export class AdvancedImprovementComponent implements OnInit {
  selected: string = '';
  improvements: string[] = [
    'Receba +1 em qualquer classificação (máximo +3).',
    'Mude este caçador para um novo tipo.',
    'Crie um segundo caçador para jogar junto com este.',
    'Marque dois dos movimentos básicos como avançados.',
    'Marque outros dois dos movimentos básicos como avançados.',
    'Aposente este caçador para uma vida segura.',
    'Apague uma caixa marcada de Sorte.',
    'Pegue outra escolha de Magia Combativa.',
    'Você pode eliminar outra opção das suas Ferramentas e técnicas.',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
