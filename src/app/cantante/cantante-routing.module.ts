import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantantePage } from './cantante.page';

const routes: Routes = [
  {
    path: '',
    component: CantantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantantePageRoutingModule {}
