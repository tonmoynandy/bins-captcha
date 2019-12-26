import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {CaptchaService} from './captcha.service';
@Component({
  selector: "app-captcha",
  templateUrl: "./captcha.component.html",
  styleUrls: ["./captcha.component.css"],
})
export class CaptchaComponent implements OnChanges {
  @Input("config") config: any = {};
  @Output() captchaCode = new EventEmitter();
  code: any = "";
  constructor(private captchService:CaptchaService){}
  ngOnChanges() {
    if (this.config) {
      if (!this.config.font || !this.config.font.size) {
        this.config["font"]["size"] = "40px";
      }
      if (!this.config.font || !this.config.font.family) {
        this.config["font"]["family"] = "Arial";
      }
      if (!this.config.strokeColor) {
        this.config["strokeColor"] = "#f20c6c";
      }
      if (!this.config.length) {
        this.config["length"] = 6;
      }
      if (!this.config.back || !this.config.back.stroke) {
        this.config["back"]["stroke"] = "";
      }
      if (!this.config.back || !this.config.back.solid) {
        this.config["back"]["solid"] = "#f2efd2";
      }

      this.createCaptcha();
    }
  }
  createCaptcha() {
    let char =
      Math.random()
        .toString(24)
        .substring(2, this.config.length) +
      Math.random()
        .toString(24)
        .substring(2, 4);
    this.code = char = char.toUpperCase();

    setTimeout(() => {
      let captcahCanvas: any = document.getElementById("captcahCanvas");
      var ctx = captcahCanvas.getContext("2d");
      ctx.fillStyle = this.config.back.solid;
      ctx.fillRect(0, 0, captcahCanvas.width, captcahCanvas.height);

      ctx.beginPath();

      captcahCanvas.style.letterSpacing = 15 + "px";
      ctx.font = this.config.font.size + " " + this.config.font.family;
      ctx.fillStyle = this.config.font.color;
      ctx.textBaseline = "middle";
      ctx.fillText(char, 40, 50);
      if (this.config.back.stroke) {
        ctx.strokeStyle = this.config.back.stroke;
        for (var i = 0; i < 150; i++) {
          ctx.moveTo(Math.random() * 300, Math.random() * 300);
          ctx.lineTo(Math.random() * 300, Math.random() * 300);
        }
        ctx.stroke();
      }
       this.captchService.setCaptchaCode(char);
      // this.captchaCode.emit(char);
    }, 100);
  }

  playCaptcha() {
    var msg = new SpeechSynthesisUtterance(this.code.split('').join(' '));
    msg.pitch = 0.1;
    window.speechSynthesis.speak(msg);
  }
}
