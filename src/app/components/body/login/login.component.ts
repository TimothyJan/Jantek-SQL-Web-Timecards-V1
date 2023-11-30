import { Component } from '@angular/core';
import { JantekService } from '../../../services/jantek.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  constructor(
    private _jantekService: JantekService,
  ) {}

  onLogin() {
    if (this.form.valid) {
      this._jantekService.login(this.form.value);
    }
  }

}
