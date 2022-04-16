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
 * Generated class for the TrahangdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trahangdetail',
  templateUrl: 'trahangdetail.html',
})
export class TrahangdetailPage {
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
    console.log(this.item)
  }

  ionViewDidLoad() {
  }

  updatetrangthaigiaohang(update: String) {
    if (update == "true") {
      this.buttons = [
        {
          text: 'Chấp nhận đơn trả hàng',
          handler: () => {
            this.selectWhere("Chấp nhận đơn trả hàng")
          }
        }
      ]
    }

    if (update == "Chấp nhận đơn trả hàng") {
      this.buttons = [
        {
          text: 'Thu hồi',
          handler: () => {
            this.selectWhere("Thu hồi")
          }
        }
      ]
    }

    if (update == "Thu hồi") {
      this.buttons = [
        {
          text: 'Thu hồi thành công',
          handler: () => {
            this.selectWhere("Thu hồi thành công")
          }
        }
      ]
    }

    if (update == "Thu hồi thành công") {
      this.buttons = [
        {
          text: 'Thủ tục sản phẩm',
          handler: () => {
            this.selectWhere("Thủ tục sản phẩm")
          }
        }
      ]
    }

    if (update == "Thủ tục sản phẩm") {
      this.buttons = [
        {
          text: 'Thủ tục hoàn tiền',
          handler: () => {
            this.selectWhere("Thủ tục hoàn tiền")
          }
        }
      ]
    }

    if (update == "Thủ tục hoàn tiền") {
      this.buttons = [
        {
          text: 'Thủ tục hoàn tiền hoàn tất',
          handler: () => {
            this.selectWhere("Thủ tục hoàn tiền hoàn tất")
          }
        }
      ]
    }

  }

  ionViewDidEnter() {
    switch (this.item.trahang) {
      case 'true':
        this.updatetrangthaigiaohang('true');
        break;
      case 'Chấp nhận đơn trả hàng':
        this.updatetrangthaigiaohang('Chấp nhận đơn trả hàng');
        break;
      case 'Thu hồi':
        this.updatetrangthaigiaohang('Thu hồi');
        break;
      case 'Thu hồi thành công':
        this.updatetrangthaigiaohang('Thu hồi thành công');
        break;
      case 'Thủ tục sản phẩm':
        this.updatetrangthaigiaohang('Thủ tục sản phẩm');
        break;
      case 'Thủ tục hoàn tiền':
        this.updatetrangthaigiaohang('Thủ tục hoàn tiền');
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

  }
  onSelectVT() {
    // this.apicommit.vitri = this.getvanchuyen.vitri[0];
  }

  sendApi() {
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
    let seq = this.api.post('khautrahang', body).share();

    seq.subscribe((res: any) => {

      if (res.status === 200) {
        this.displayToast();
      }

    }, err => {
      console.error('ERROR', err);
    });
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
    this.result = "Tiếp Tục";
    // this.apicommit.result = "kq=" + this.apicommit.name + ",vt=" + this.apicommit.vitri + ",dvvc=" + this.apicommit.donvivanchuyen;
    if (this.apicommit.name === 'Chấp nhận đơn trả hàng') {
      this.apicommit.result = this.apicommit.name + ";" + "Yêu cầu trả đơn hàng thành công, bạn vui lòng đóng gói lại sản phẩm";
    }

    if (this.apicommit.name === 'Thu hồi') {
      this.apicommit.result = this.apicommit.name + ";" + "Lazuda sẽ tiến hành thu hồi sản phẩm chậm nhất trong ngày làm việc tiếp theo, xin vui lòng lưu ý điện thoại";
    }

    if (this.apicommit.name === 'Thu hồi thành công') {
      this.apicommit.result = this.apicommit.name + ";" + "Kiện hàng đã được bên vận chuyển xác nhận thu hồi sản phẩm thành công từ bạn và đang vận chuyển";
    }

    if (this.apicommit.name === 'Thủ tục sản phẩm') {
      this.apicommit.result = this.apicommit.name + ";" + "Đang thực hiện thủ tục cho đơn trả hàng của bạn";
    }

    if (this.apicommit.name === 'Thủ tục hoàn tiền') {
      this.apicommit.result = this.apicommit.name + ";" + "Lazuda đang thực hiện thủ tục hoàn tiền";
    }

    if (this.apicommit.name === 'Thủ tục hoàn tiền hoàn tất') {
      this.apicommit.result = this.apicommit.name + ";" + "Thủ tục hoàn tiền đã hoàn tất. Cảm ơn bạn đã mua sắm tại Lazuda!";
    }

  }

}
