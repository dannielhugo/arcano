import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppearanceComponent } from './appearance/appearance.component';
import { MainComponent } from './main.component';
import { ClassificationComponent } from './classification/classification.component';
import { HistoryComponent } from './history/history.component';
import { CombatMagicComponent } from './combat-magic/combat-magic.component';
import { MovementsComponent } from './movements/movements.component';
import { EquipmentsComponent } from './equipments/equipments.component';

@NgModule({
  declarations: [MainComponent, AppearanceComponent, ClassificationComponent, HistoryComponent, CombatMagicComponent, MovementsComponent, EquipmentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
