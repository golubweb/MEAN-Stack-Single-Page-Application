import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router }        from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthenticationService } from '../../../shared/shared';

@Component({
    selector:    '[app-login-widget]',
    templateUrl: 'templates/layout/login-widget.component.html',
    styles: [`
        .ng-valid {border-color: #3c763d;}
        .ng-invalid {border-color: #a94442;}
        .ng-untouched {border-color: #999;}
    `]
})
export default class LoginWidgetComponent implements OnInit {
    loginForm;
    userData: any[] = [];
    notValidCredentials: boolean = false;
    showUsernameHint:    boolean = false;
    showPasswordHint:    boolean = false;
    userIsLoggedIn:      boolean = true;

    constructor(
        private router: Router,
        private cookieService: CookieService,
        private _authService: AuthenticationService
    ) {
        let tokenValue: string = cookieService.get('gw-token');

        if(!(/^\s*$/).test(tokenValue)) {
            this.userIsLoggedIn = false;

            this.userData = _authService.decodeJWT(tokenValue);
        }

        this._authService.userIsloggedIn.subscribe(isLoggedIn => {
            this.userIsLoggedIn = isLoggedIn;
        });
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'username': new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)
                ]
            )),
            'password': new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(7),
                    Validators.maxLength(40),
                    Validators.pattern(/^.{7,40}$/)
                ]
            ))
        });

        const username = this.loginForm.controls['username'];
        const password = this.loginForm.controls['password'];

        username.valueChanges.subscribe(value => {
            this.showUsernameHint = this.emailValidator(value);
        });

        password.valueChanges.subscribe(value => {
            this.showPasswordHint = this.passwordValidator(value);
        });
    }

    authenticate() {
        let credentials: any = this.loginForm.value;
        this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

        this._authService.login(credentials).then(response => {
            if(response.success && response.token) {
                this.userData = response[0];
                this.userIsLoggedIn = response[1];
            } else {
                this.notValidCredentials = response;
            }
        });
    }

    logout($event): void {
        $event.preventDefault();

        this._authService.logout().then(success => {
            if(success) {
                this.userIsLoggedIn = true;
            }
        });
    }

    private emailValidator(velue): boolean {
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(velue)) {
            return false;
        } else {
            return true;
        }
    }

    private passwordValidator(value): boolean {
        if(/^.{7,40}$/.test(value)) {
            return false;
        } else {
            return true;
        }
    }
}
