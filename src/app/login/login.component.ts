import {Component} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {LoginModel} from '../../models/login-model';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel = new LoginModel('', '');

  constructor(private accountService: AccountService, private snackBar: MatSnackBar, private router: Router) {
  }

  isDisabled() {
    return this.loginModel.password === '' || this.loginModel.username === '';
  }

  login() {
    console.log('login');
    this.accountService.login(this.loginModel).subscribe((data) => {
      if (data.isValid) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        this.router.navigate(['/home']);
      } else {
        this.loginModel = new LoginModel(null, null);
        this.snackBar.open('The username or password you have entered is invalid', 'I\m sorry!', {
          duration: 3000,
        });
      }
    });
  }

}
