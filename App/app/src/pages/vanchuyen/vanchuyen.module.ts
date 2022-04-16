import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VanchuyenPage } from './vanchuyen';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VanchuyenPage,
  ],
  imports: [
    IonicPageModule.forChild(VanchuyenPage),
    TranslateModule.forChild()
  ],
  exports: [
    VanchuyenPage
  ]
})
export class VanchuyenPageModule { }
