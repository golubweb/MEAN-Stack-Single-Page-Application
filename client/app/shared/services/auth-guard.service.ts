import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CookieService }     from 'ngx-cookie-service';
import AuthenticationService from './authentication.service';

@Injectable()
export default class AuthGuardService implements CanActivate {
    cookie: void;

    constructor(
        private router: Router,
        private cookieService: CookieService,
        private authService: AuthenticationService
    ) {}

    canActivate(): boolean {
        let token = this.cookieService.get('gw-token');
        let tokenData = { token: token };

        return this.authService.isAuthorized(tokenData).then(authUserData => {
            if(!authUserData) {
                return true;
            } else {
                return false;
            };
        });
    }
}
//this.router.navigate(['/page/register']);
