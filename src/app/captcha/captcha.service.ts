import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  
  captchSource = new BehaviorSubject(null);
  captchStatus = this.captchSource.asObservable(); 
  constructor() { }

  setCaptchaStatus(code) {
    this.captchSource.next(code);
  }

}