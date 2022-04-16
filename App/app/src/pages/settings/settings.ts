import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ModalController, NavController, LoadingController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  product: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public api: Api,
    public translate: TranslateService
  ) {
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
  }

  ionViewWillEnter() {

  }
  ionViewDidEnter() {
    this.product = []
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

    let seq = this.api.post('getdongiaohang', {}).share();

    seq.subscribe((res: any) => {

      if (res.status === 200) {
        res.data.forEach((e: any) => {
          e.info = this.convertImg(e.info)
        })
        this.product = res.data
        // console.log(this.product)
      }

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
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('GiaohangPage', {
      item: item
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
