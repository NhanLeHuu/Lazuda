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
 * Generated class for the VanchuyenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vanchuyen',
  templateUrl: 'vanchuyen.html',
})
export class VanchuyenPage {
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

  ionViewDidEnter() {
    if (this.item.trangthaigiaohang === 'Đã nhận kiện hàng') {
      this.buttons = [
        {
          text: 'Đã đến trung tâm trung chuyển',
          handler: () => {
            this.selectWhere("Đã đến trung tâm trung chuyển")
          }
        },
        {
          text: 'Đã rời khỏi trung tâm trung chuyển',
          handler: () => {
            this.selectWhere("Đã rời khỏi trung tâm trung chuyển")
          }
        }
      ]
    } else if (this.item.trangthaigiaohang === 'Đã đến trung tâm trung chuyển') {
      this.buttons = [
        {
          text: 'Đã rời khỏi trung tâm trung chuyển',
          handler: () => {
            this.selectWhere("Đã rời khỏi trung tâm trung chuyển")
          }
        }
      ]
    } else {
      this.buttons = [
        {
          text: 'Đã nhận kiện hàng',
          handler: () => {
            this.selectWhere("Đã nhận kiện hàng")
          }
        },
        {
          text: 'Đã đến trung tâm trung chuyển',
          handler: () => {
            this.selectWhere("Đã đến trung tâm trung chuyển")
          }
        },
        {
          text: 'Đã rời khỏi trung tâm trung chuyển',
          handler: () => {
            this.selectWhere("Đã rời khỏi trung tâm trung chuyển")
          }
        }
      ]
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
      message: 'Thông Tin Vận Chuyển Đơn Của Bạn Đã Đc Lưu',
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
