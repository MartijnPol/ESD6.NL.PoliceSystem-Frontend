import {Component} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {LoginModel} from '../../models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel = new LoginModel('', '');

  constructor(private accountService: AccountService) {
  }

  isDisabled() {
    return this.loginModel.password === '' || this.loginModel.username === '';
  }

  login() {
    this.accountService.login(this.loginModel).subscribe(() => {
      this.loginModel.password = '';
      this.loginModel.username = '';
    });
  }

}
