import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import QRCode from 'qrcode';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QRPage implements OnInit {

  paginaTitulo = "CREAR QR"

  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor( private barcodeScanner: BarcodeScanner ) { }

  ngOnInit() {
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }

  code = '';
  generated = '';

  displayQrCode() {
    return this.generated !== '';
  }


  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }


}
