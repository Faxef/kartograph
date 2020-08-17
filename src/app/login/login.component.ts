import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean;

  constructor(
    private Auth: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  loginUser($event: Event) {
    $event.preventDefault();
    const target = $event.target;
    const user = target[0].value;
    const password = target[1].value;

    this.Auth.login(user, password);

    this.error = this.Auth.errorAlert;
  }
}
