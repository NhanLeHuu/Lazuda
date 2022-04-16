import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { Items } from '../../providers';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, items: Items,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public api: Api) {
    this.item = navParams.get('item');
  }

  async onDongGoi() {
    const alert = await this.alertController.create({
      subTitle: 'Thông Báo',
      message: 'Đơn hàng mã số ' + this.item.madonhang + ' đã được đóng gói và bàn giao cho đơn vị vận chuyển?',
      buttons: [
        {
          text: 'Hoãn',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Đã Hoàn Thành',
          cssClass: 'primary',
          handler: () => {
            let body = {
              id: this.item.id,
              iduser: this.item.iduser,
              idsanpham: this.item.idsanpham,
              typemenu: this.item.typemenu,
              madonhang: this.item.madonhang,
              ngaygio: new Date().toLocaleString()
            }
            let seq = this.api.post('goidonhang', body).share();
            seq.subscribe((res: any) => {
              if (res.status === 200) {
                this.displayToast();
              }
            }, err => {
              console.error('ERROR', err);
            })

          }
        }
      ],
      enableBackdropDismiss: true
    });

    await alert.present();
  }
  async displayToast() {
    const toast = await this.toastController.create({
      message: 'Thông Tin Gói Hàng Của Bạn Đã Đc Lưu',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }
}
