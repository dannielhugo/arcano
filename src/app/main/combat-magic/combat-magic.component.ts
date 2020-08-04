import { Component, OnInit } from '@angular/core';

interface MagicCheckbox {
  title: string;
  value: boolean;
}

@Component({
  selector: 'app-combat-magic',
  templateUrl: './combat-magic.component.html',
  styleUrls: ['./combat-magic.component.scss']
})
export class CombatMagicComponent implements OnInit {

  baseMagics: MagicCheckbox[] = [
    {
      title: 'Explosão [2-dano perto mágica chamativa barulhenta]',
      value: false,
    },
    {
      title: 'Bola [1-dano perto área mágica chamativa barulhenta]',
      value: false,
    },
    {
      title: 'Míssil [1-dano longe mágica chamativa barulhenta]',
      value: false,
    },
    {
      title: 'Muralha [1-dano perto barreira 1-armadura mágica chamativa barulhenta]',
      value: false,
    }
  ];

  effects: MagicCheckbox[] = [
    {
      title: 'Fogo: Adicione +2 de dano e [fogo] para uma base. Com 10+ em uma rolagem de magia combativa, o fogo nãovia se espalhar.',
      value: false,
    },
    {
      title: 'Força ou Vento: Adicione +1 de dano e [empurrão] para uma base; ou +1 de armadura para uma muralha.',
      value: false,
    },
    {
      title: 'Raio ou Entropia: Adicione +1 de dano e [brutal] para uma base.',
      value: false,
    },
    {
      title: 'Frio ou Gelo: Adicione −1 de dano e +2 de armadura para uma muralha; ou +1 de dano e [restritiva] para outras bases.',
      value: false,
    },
    {
      title: 'Terra: Adicione [empurrão restritiva] para uma base.',
      value: false,
    },
    {
      title: 'Necromântica: Adicione [drena-vida] para uma base.',
      value: false
    },
  ];

  get canSelectMore(): boolean {
    const base = this.baseMagics.filter(magic => magic.value).length;
    const effects = this.effects.filter(magic => magic.value).length;

    return base + effects < 3;
  }

  get hasNoBaseSelected(): boolean {
    const base = this.baseMagics.filter(magic => magic.value).length;
    return base === 0;
  }

  isDisabled(magic: MagicCheckbox): boolean {
    if (this.canSelectMore) {
      return false;
    }

    return !Boolean(magic.value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
