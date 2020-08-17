import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  error = false;
  private isLoggedInStatus = false;

  constructor(
    private router: Router,
  ) {
  }

  get isLoggedIn() {
    return this.isLoggedInStatus;
  }

  get errorAlert() {
    return this.error;
  }

  SetLoggedIn(value: boolean) {
    this.isLoggedInStatus = value;
  }

  login(username, password) {
    const name = 'cartograph';
    const pass = 'cartograph2020';
    if (username === name && password === pass) {
      this.SetLoggedIn(true);
      this.error = false;
      this.router.navigate(['maps']);
    } else {
      this.error = true;
    }
  }
}
