import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

import { AppearanceComponent } from './appearance/appearance.component';
import { MainComponent } from './main.component';
import { ClassificationComponent } from './classification/classification.component';
import { HistoryComponent } from './history/history.component';
import { CombatMagicComponent } from './combat-magic/combat-magic.component';

@NgModule({
  declarations: [MainComponent, AppearanceComponent, ClassificationComponent, HistoryComponent, CombatMagicComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
