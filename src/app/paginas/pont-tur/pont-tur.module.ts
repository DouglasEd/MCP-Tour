import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontTurPageRoutingModule } from './pont-tur-routing.module';

import { PontTurPage } from './pont-tur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontTurPageRoutingModule
  ],
  declarations: [PontTurPage]
})
export class PontTurPageModule {}
