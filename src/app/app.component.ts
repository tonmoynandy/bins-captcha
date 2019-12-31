import { Component } from '@angular/core';
import {NgxCaptchaService} from '@binssoft/ngx-captcha';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '@binssoft/ngx-captcha';
  captchaStatus:any = '';
  
  captchaConfig:any = {
    type:2, 
    length:6, 
    cssClass:'custom',
    back: {
     stroke:"#2F9688",
     solid:"#f2efd2"
    } , 
    font:{
      color:"#000000", 
      size:"35px"
    }
  };

  constructor(private captchaService:NgxCaptchaService) {
    this.captchaService.captchStatus.subscribe((status)=>{
      this.captchaStatus = status;
      if (status == false) {
          alert("Opps!\nCaptcha mismatch")
      } else if (status == true)  {
          alert("Success!\nYou are right")
      }
    });
  }



}
