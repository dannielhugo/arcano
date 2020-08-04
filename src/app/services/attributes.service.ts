import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Attributes {
  bravery: number;
  cunning: number;
  strangeness: number;
  firmness: number;
  subtlety: number;
}

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  private attributes: Attributes;

  attributeChanged = new Subject<Attributes>();

  constructor() {
    this.attributes = {
      bravery: 0,
      cunning: 0,
      strangeness: 0,
      firmness: 0,
      subtlety: 0,
    };
  }

  getAttributes(): Attributes {
    return this.attributes;
  }

  updateAttribute(attribute: string, value: number) {
    this.attributes[attribute] += value;
    this.attributeChanged.next(Object.assign({}, this.attributes));
  }
}
