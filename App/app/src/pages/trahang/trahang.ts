import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, LoadingController } from 'ionic-angular';
import { Api } from '../../providers/api/api';
/**
 * Generated class for the TrahangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trahang',
  templateUrl: 'trahang.html',
})
export class TrahangPage {

  product: any[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public api: Api) {
  }

  ionViewDidEnter() {
    this.getOrderConfirm();
  }

  async getOrderConfirm() {

    const loading = await this.loadingController.create({
      duration: 1000,
      spinner: 'crescent',
      content: 'Lazuda đang lấy dữ liệu',
      showBackdrop: true
    });
    await loading.present();

    let seq = this.api.post('getdonrefund', {}).share();

    seq.subscribe((res: any) => {
      res.data.forEach((e: any) => {
        e.info = this.convertImg(e.info)
      })
      this.product = res.data
      // console.log(this.product)

    }, err => {
      console.error('ERROR', err);
    });
  }

  convertImg(data: any): any {
    if (data instanceof Array) {
      data.forEach(element => {
        element.galley = []
        var srcimg = element.img.split(',')
        for (let i = 0; i < srcimg.length; i++) {
          srcimg[i] = "/assets/product/" + srcimg[i]
        }
        element.galley = srcimg
      })
    } else {
      data.galley = []
      var srcimg = data.img.split(',')
      for (let i = 0; i < srcimg.length; i++) {
        srcimg[i] = "/assets/product/" + srcimg[i]
      }
      data.galley = srcimg
    }
    return data;
  }

  openItem(item: any) {
    this.navCtrl.push('TrahangdetailPage', {
      item: item
    });
  }
}
