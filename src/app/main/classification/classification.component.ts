import { Component, OnInit } from '@angular/core';
import { Attributes, AttributesService } from 'src/app/services/attributes.service';

interface ClassificationObject {
  value: Attributes;
  label: string;
}

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  currentValue: Attributes = null;
  oldValue: Attributes = null;

  classifications: ClassificationObject[] = [
    {
      label: 'Braveza ±0, Esperteza +1, Estranheza +2, Firmeza +1, Sutileza −1',
      value: {
        bravery: 0,
        cunning: 1,
        strangeness: 2,
        firmness: 1,
        subtlety: -1,
      }
    },
    {

      label: 'Braveza +1, Esperteza +1, Estranheza +2, Firmeza −1, Sutileza ±0',
      value: {
        bravery: 1,
        cunning: 1,
        strangeness: 2,
        firmness: -1,
        subtlety: 0,
      }
    },
    {
      label: 'Braveza −1, Esperteza +2, Estranheza +2, Firmeza ±0, Sutileza −1',
      value: {
        bravery: -1,
        cunning: 2,
        strangeness: 2,
        firmness: 0,
        subtlety: -1,
      }
    },
    {
      label: 'Braveza −1, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza +1',
      value: {
        bravery: -1,
        cunning: 1,
        strangeness: 2,
        firmness: 0,
        subtlety: 1,
      }

    },
    {
      label: 'Braveza ±0, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza ±0',
      value: {
        bravery: 0,
        cunning: 1,
        strangeness: 2,
        firmness: 0,
        subtlety: 0,
      }
    }
  ];


  constructor(private attributesService: AttributesService) { }

  ngOnInit(): void {
  }

  onClassificationChanged() {
    // Undo attributes from previous selected classification
    this.updateEachAttribute(this.revertAttributeValues(this.oldValue));

    // Update with the new ones
    this.updateEachAttribute(this.currentValue);
    this.oldValue = this.currentValue;
  }

  private revertAttributeValues(attributes: Attributes): Attributes {
    const newAttribtues = Object.assign({}, attributes);
    for (const attribute in newAttribtues) {
      newAttribtues[attribute] = -newAttribtues[attribute];
    }

    return newAttribtues;
  }

  private updateEachAttribute(attributes: Attributes) {
    for (const attribute in attributes) {
      this.attributesService.updateAttribute(attribute, attributes[attribute]);
    }
  }

}
