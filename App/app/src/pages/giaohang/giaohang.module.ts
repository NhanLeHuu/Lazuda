import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiaohangPage } from './giaohang';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GiaohangPage,
  ],
  imports: [
    IonicPageModule.forChild(GiaohangPage),
    TranslateModule.forChild()
  ],
  exports: [
    GiaohangPage
  ]
})
export class GiaohangPageModule {}
