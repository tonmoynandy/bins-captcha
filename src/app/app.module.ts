import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {NgxCaptchaModule} from '@binssoft/ngx-captcha';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxCaptchaModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
