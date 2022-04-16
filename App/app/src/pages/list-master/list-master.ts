import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, LoadingController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  product: any[];

  constructor(public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public api: Api,
    public http: HttpClient) {
    this.currentItems = this.items.query();
    // this.getOrderConfirm();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    this.loading();
    this.getOrderConfirm();
  }

  async loading() {
    const loading = await this.loadingController.create({
      duration: 1000,
      spinner: 'crescent',
      content: 'Lazuda đang lấy dữ liệu',
      showBackdrop: true
    });
    await loading.present();
  }

  getOrderConfirm() {
    var seq = this.api.post('getorderconfirm', {}).share();
    seq.subscribe((res: any) => {
      if (res.status == '200') {
        if (res.data != null) {
          res.data.forEach((e: any) => {
            e.info = this.convertImg(e.info)
          })
          this.product = res.data
        } else {
          this.product = []
        }
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
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
