import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Restangular} from 'ngx-restangular';
import {AccountService} from './account.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private router: Router, private restAngular: Restangular, private accountService: AccountService) {
  }

  canActivate() {
    if (localStorage.getItem('username')) {

      this.restAngular.all('accounts/verify').post(localStorage.getItem('token')).subscribe(data => {

        if (data.isValid) {
          return true;
        }

        this.accountService.logout();
        this.router.navigate(['']);
        return false;

      });

      return true;
    }

    this.accountService.logout();
    this.router.navigate(['']);
    return false;

  }

}


