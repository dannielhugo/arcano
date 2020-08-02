import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SubheaderComponent } from './subheader/subheader.component';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { ActionsComponent } from './actions/actions.component';
import { ActionCircleComponent } from './actions/action-circle/action-circle.component';
import { LuckComponent } from './luck/luck.component';
import { CoreModule } from '../core/core.module';
import { DamageComponent } from './damage/damage.component';

@NgModule({
  declarations: [
    SubheaderComponent,
    HomeComponent,
    HomeCardComponent,
    ActionsComponent,
    ActionCircleComponent,
    LuckComponent,
    DamageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    FormsModule,
    CoreModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
