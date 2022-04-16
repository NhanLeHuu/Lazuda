import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrahangPage } from './trahang';

@NgModule({
  declarations: [
    TrahangPage,
  ],
  imports: [
    IonicPageModule.forChild(TrahangPage),
  ],
  exports: [
    TrahangPage
  ]
})
export class TrahangPageModule {}
