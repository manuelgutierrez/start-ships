import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponentsRoutingModule } from './ships-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Components
import { ShipsComponent } from './ships.component';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';

@NgModule({
  declarations: [ShipsComponent, ShipsDetailsComponent],
  imports: [
    CommonModule,
    ShipsComponentsRoutingModule,
    HttpClientModule
  ]
})
export class ShipsModule { }
