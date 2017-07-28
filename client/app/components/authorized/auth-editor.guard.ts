import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/shared';

@Injectable()
export default class AuthEditor implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthenticationService) {}

    canActivate(): boolean {
        let token = this.authService.getToken();
        let tokenData = { token: token };

        return this.authService.isAuthorized(tokenData).then(authUserData => {

            if(!authUserData) {
                this.router.navigate(['/login']);
            } else {
                return true;
            }
        });
    }
}
