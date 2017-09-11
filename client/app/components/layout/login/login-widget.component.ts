import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router }        from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthenticationService } from '../../../shared/shared';

@Component({
    selector:    '[app-login-widget]',
    templateUrl: 'templates/layout/login-widget.component.html'
})
export default class LoginWidgetComponent implements OnInit {
    loginForm;
    userData: any[] = [];
    notValidCredentials: boolean = false;
    showUsernameHint:    boolean = false;
    showPasswordHint:    boolean = false;
    userIsLoggedIn:      boolean = false;

    constructor(
        private router: Router,
        private cookieService: CookieService,
        private _authService: AuthenticationService
    ) {
        let tokenValue: string = cookieService.get('gw-token');

        if(!(/^\s*$/).test(tokenValue)) {
            this.userIsLoggedIn = true;
            this.userData = _authService.decodeJWT(tokenValue);
        }

        this._authService.userIsloggedIn.subscribe(value => this.userIsLoggedIn = value);
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'username': new FormControl('', Validators.compose([
                Validators.required,
                this.emailValidator
            ])),
            'password': new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(7),
                Validators.maxLength(40),
                this.passwordValidator
            ]))
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
            if(response.success && response.hasOwnProperty('data')) {
                this.userData = response.data;

                this._authService.userIsloggedIn.subscribe( value => this.userIsLoggedIn = value );
            } else {
                this.notValidCredentials = response;
            }
        });
    }

    logout($event): void {
        $event.preventDefault();

        this._authService.logout().then(response => {
            this._authService.userIsloggedIn.subscribe( value => this.userIsLoggedIn = value );
        });
    }

    private emailValidator(velue): boolean {
        return (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(velue)) ? false : true;
    }

    private passwordValidator(value): boolean {
        return (/^.{7,40}$/.test(value)) ? false : true;
    }
}
