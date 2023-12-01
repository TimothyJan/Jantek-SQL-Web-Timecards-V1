import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class JantekService {
  isAuthenticated: boolean = false;
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();

  demoUsername:string = "jantek";
  demoPassword:string = "jantek";

  constructor(
    private _alertService: AlertService
    ) { }

  login(form: any): boolean {
    /* Check if user in database */
    if(form.username == this.demoUsername && form.password == this.demoPassword) {
      this.isAuthenticatedChange.next(true);
      this._alertService.openSnackBar("Login Successful");
      return true;
    }
    this._alertService.openSnackBar("Incorrect Login");
    return false;
  }

  logoff() {
    this.isAuthenticatedChange.next(false);
    this._alertService.openSnackBar("Logoff Successful");
  }
}
