import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  histories: string[] = [
    'Ele age como sua consciência quando você sente o poder subir à cabeça. Pergunte a ele sobre a última vez que isto aconteceu.',
    'Parentes de sangue, embora vocês não tenham tido contato por vários anos. Pergunte a ele como vocês se reconectaram.',
    'Mentor de uma outra vida. Pergunte a ele o que ele te ensinou.',
    'Quando você o resgatou exibindo sua magia, você o introduziu ao sobrenatural. Diga a ele que criatura estava atrás dele.',
    'Uma velha rivalidade que se tornou uma forte amizade. Diga a ele o que vocês disputavam.',
    'Você pensou que ele estava morto, e agora ele está de volta. O que o “matou”?',
    'Ele é um interesse amoroso que vai e volta. Pergunte a ele o que mantém vocês separados. Diga a ele o que mantém vocês juntos.',
    'Um companheiro de luta. Vocês enfrentaram as maiores ameaças juntos.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
