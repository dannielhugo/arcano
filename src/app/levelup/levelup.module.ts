import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { LevelupComponent } from './levelup.component';
import { CoreModule } from '../core/core.module';
import { ImprovementComponent } from './improvement/improvement.component';
import { AdvancedImprovementComponent } from './advanced-improvement/advanced-improvement.component';

@NgModule({
  declarations: [LevelupComponent, ImprovementComponent, AdvancedImprovementComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    CoreModule,
  ],
  exports: [
    LevelupComponent,
  ]
})
export class LevelupModule { }
