import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from './ships.component';

const routes: Routes = [
  { path: '', component: ShipsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsComponentsRoutingModule { }