import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  LoadingController,
  NavParams,
  ActionSheetController,
  ToastController
} from 'ionic-angular';
import { Api } from '../../providers/api/api';
import tp from './tp'

/**
 * Generated class for the GiaohangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giaohang',
  templateUrl: 'giaohang.html',
})
export class GiaohangPage {
  item: any;
  toppings: 'Bacon';
  donvivanchuyen = [
    'LEX VN',
    'BEST EXPRESS',
    'AhaMove',
    'Ship60',
    'ninja van',
    'GHN Express',
    "Không"
  ];

  getvanchuyen = {
    donvivanchuyen: '',
    vitri: ''
  }

  thanhpho: any = tp.LtsItem;
  apicommit: { name: String, donvivanchuyen: String, vitri: String, result: String } = {
    name: '',
    donvivanchuyen: '',
    vitri: '',
    result: ''
  };
  result: any = null;
  buttons: any = []

  @ViewChild('modal1') selectRef1: any;
  @ViewChild('modal2') selectRef2: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public toastController: ToastController,
    public api: Api
  ) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
  }

  updatetrangthaigiaohang(update: String) {
    if (update == "Đã rời khỏi trung tâm trung chuyển") {
      this.buttons = [
        {
          text: 'Đã đến trạm giao hàng',
          handler: () => {
            this.selectWhere("Đã đến trạm giao hàng")
          }
        }
      ]
    }

    if (update == "Đã đến trạm giao hàng") {
      this.buttons = [
        {
          text: 'Đã rời khỏi trạm giao hàng',
          handler: () => {
            this.selectWhere("Đã rời khỏi trạm giao hàng")
          }
        }
      ]
    }

    if (update == "Đã rời khỏi trạm giao hàng") {
      this.buttons = [
        {
          text: 'Đang giao hàng',
          handler: () => {
            this.selectWhere("Đang giao hàng")
          }
        }
      ]
    }

    if (update == "Đang giao hàng") {
      this.buttons = [
        {
          text: 'Kiện hàng sắp đến',
          handler: () => {
            this.selectWhere("Kiện hàng sắp đến")
          }
        }
      ]
    }

    if (update == "Kiện hàng sắp đến") {
      this.buttons = [
        {
          text: 'Đã giao hàng',
          handler: () => {
            this.selectWhere("Đã giao hàng")
          }
        }
      ]
    }

  }

  ionViewDidEnter() {
    switch (this.item.trangthaigiaohang) {
      case 'Đã rời khỏi trung tâm trung chuyển':
        this.updatetrangthaigiaohang('Đã rời khỏi trung tâm trung chuyển');
        break;
      case 'Đã đến trạm giao hàng':
        this.updatetrangthaigiaohang('Đã đến trạm giao hàng');
        break;
      case 'Đã rời khỏi trạm giao hàng':
        this.updatetrangthaigiaohang('Đã rời khỏi trạm giao hàng');
        break;
      case 'Đang giao hàng':
        this.updatetrangthaigiaohang('Đang giao hàng');
        break;
      case 'Kiện hàng sắp đến':
        this.updatetrangthaigiaohang('Kiện hàng sắp đến');
        break;
      case 'Đã giao hàng':
        this.updatetrangthaigiaohang('Đã giao hàng');
        break;
    }
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Đơn Hàng ' + this.item.madonhang,
      buttons: this.buttons
    });

    actionSheet.present();
  }

  onSelectVC() {
    this.apicommit.donvivanchuyen = this.getvanchuyen.donvivanchuyen[0];
    this.selectRef2.open();
  }
  onSelectVT() {
    this.apicommit.vitri = this.getvanchuyen.vitri[0];
    this.result = "Tiếp Tục";
    this.apicommit.result = "kq=" + this.apicommit.name + ",vt=" + this.apicommit.vitri + ",dvvc=" + this.apicommit.donvivanchuyen;
  }

  sendApi() {
    if (this.apicommit.vitri && this.apicommit.donvivanchuyen && this.apicommit.name) {
      let body = {
        id: this.item.id,
        iduser: this.item.iduser,
        idsanpham: this.item.idsanpham,
        typemenu: this.item.typemenu,
        madonhang: this.item.madonhang,
        trangthai: this.apicommit.result,
        progress: this.apicommit.name,
        ngaygio: new Date().toLocaleString()
      }

      let seq = this.api.post('khauvanchuyen', body).share();

      seq.subscribe((res: any) => {

        if (res.status === 200) {
          this.displayToast();
        }

      }, err => {
        console.error('ERROR', err);
      });
    }
  }

  async displayToast() {
    const toast = await this.toastController.create({
      message: 'Thông Tin Giao Hàng Của Bạn Đã Đc Lưu',
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
  }

  selectWhere(sanpham: String) {
    this.apicommit.name = sanpham;
    this.selectRef1.open();
  }

}
