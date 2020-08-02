import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  classification: string;
  classifications: string[] = [
    'Braveza ±0, Esperteza +1, Estranheza +2, Firmeza +1, Sutileza −1',
    'Braveza +1, Esperteza +1, Estranheza +2, Firmeza −1, Sutileza ±0',
    'Braveza −1, Esperteza +2, Estranheza +2, Firmeza ±0, Sutileza −1',
    'Braveza −1, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza +1',
    'Braveza ±0, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza ±0'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
