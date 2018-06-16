import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {LoginModel} from '../models/login-model';
import {Router} from '@angular/router';

@Injectable()
export class AccountService {

  /**
   * Constructor
   * @param {Restangular} restAngular
   * @param router
   */
  constructor(private restAngular: Restangular, private router: Router) {
  }

  /**
   * Function to login
   * @param {LoginModel} loginModel
   * @returns {any}
   */
  login(loginModel: LoginModel) {
    return this.restAngular.all('accounts/login').post(loginModel).subscribe(data => {
      if (data.isValid) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        this.router.navigate(['/home']);
      }
    });
  }

  /**
   * Function to logout
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }
}
