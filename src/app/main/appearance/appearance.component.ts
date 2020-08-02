import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {

  gender: string;
  genders: string[] = ['Homem', 'Mulher', 'Andrógino'];

  eye: string;
  eyes: string[] = ['Olhos sombrios', 'Olhos ferozes', 'Olhos cansados', 'Olhos faiscantes'];


  cloth: string;
  cloths: string[] = ['Roupas amarrotadas', 'Roupas estilosas', 'Roupas góticas', 'Roupas antiquadas'];

  constructor() { }

  ngOnInit(): void {
  }

}
