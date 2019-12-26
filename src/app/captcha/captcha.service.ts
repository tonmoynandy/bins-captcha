import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  
  captchSource = new BehaviorSubject(null);
  captchCode = this.captchSource.asObservable(); 
  constructor() { }

  setCaptchaCode(code) {
    this.captchSource.next(code);
  }

}