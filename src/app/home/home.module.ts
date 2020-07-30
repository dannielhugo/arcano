import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { SubheaderComponent } from './subheader/subheader.component';
import { HomeComponent } from './home.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [SubheaderComponent, HomeComponent, ActionsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class HomeModule { }
