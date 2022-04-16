import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrahangdetailPage } from './trahangdetail';

@NgModule({
  declarations: [
    TrahangdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TrahangdetailPage),
  ],
  exports:[
    TrahangdetailPage
  ]
})
export class TrahangdetailPageModule {}
