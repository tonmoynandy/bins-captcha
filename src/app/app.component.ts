import { Component } from '@angular/core';
import {CaptchaService} from './captcha/captcha.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Bins Captcha';
  captch_code:any = '';
  captchaCode:any = '';
  
  captchaConfig:any = {
    length:6, 
    back: {
     stroke:"#2F9688",
     solid:"#f2efd2"
    } , 
    font:{
      color:"#000000", 
      size:"35px"
    }
  };

  constructor(private captchaService:CaptchaService) {
    this.captchaService.captchCode.subscribe((code)=>{
      this.captchaCode = code;
    });
  }


  checkCaptcha() {

    if (this.captch_code !== this.captchaCode) {
      alert("Opps!\nCaptcha mismatch")
    } else  {
      alert("Success!\nYou are right")
    }
  }
}
