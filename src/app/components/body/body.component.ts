import { Component } from '@angular/core';
import { JantekService } from '../../services/jantek.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  isAuthenticated = false;
  _authSubscription: any;

  constructor(
    private _jantekService: JantekService
    ) {
    this.isAuthenticated = _jantekService.isAuthenticated;
    this._authSubscription = _jantekService.isAuthenticatedChange.subscribe((value) => {
      this.isAuthenticated = value;
    });
  }


  ngOnDestroy() {
    this._authSubscription.unsubscribe();
  }
}
