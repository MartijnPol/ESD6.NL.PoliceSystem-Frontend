import {Component} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {LoginModel} from '../../models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel = new LoginModel(null, null);

  constructor(private accountService: AccountService) {
  }

  login() {
    this.accountService.login(this.loginModel).subscribe(data => {
      console.log(data);
    });
  }

}
