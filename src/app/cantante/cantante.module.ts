import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantantePageRoutingModule } from './cantante-routing.module';

import { CantantePage } from './cantante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantantePageRoutingModule
  ],
  declarations: [CantantePage]
})
export class CantantePageModule {}
