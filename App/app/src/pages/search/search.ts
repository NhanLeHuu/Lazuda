import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, LoadingController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  product: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public items: Items,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public api: Api
  ) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('VanchuyenPage', {
      item: item
    });
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

    let seq = this.api.post('getdonvanchuyen', {}).share();

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
}
