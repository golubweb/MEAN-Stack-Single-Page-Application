import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router }        from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthenticationService } from '../../../shared/shared';

@Component({
    selector:    '[login-widget]',
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
        private authService: AuthenticationService
    ) {
        const tokenValue: string = cookieService.get('gw-token');

        if(!(/^\s*$/).test(tokenValue)) {
            this.userIsLoggedIn = false;
            this.userData = authService.decodeJWT(tokenValue);
            console.log(this.userData);
        }

        this.authService.userIsloggedIn.subscribe(isLoggedIn => {
            this.userIsLoggedIn = isLoggedIn;
        });
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    //this.emailValidator
                ]
            )),
            password: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(15),
                    //this.passwordValidator
                ]
            ))
        });

        const username = this.loginForm.controls['username'];
        const password = this.loginForm.controls['password'];

        username.valueChanges.subscribe(value => {
            this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
        });

        password.valueChanges.subscribe(value => {
            this.showPasswordHint = (password.invalid && password.touched);
        });
    }

    authenticate() {
        let credentials: any = this.loginForm.value;
        this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

        this.authService.login(credentials).then(response => {
            if (response) {
                this.userData = response[0];
                this.userIsLoggedIn = response[1];
            } else {
                this.notValidCredentials = true;
            }
        });
    }

    logout($event): void {
        $event.preventDefault();

        this.authService.logout().then(success => {
            if(success) {
                this.userIsLoggedIn = true;
            }
        });
    }

    private emailValidator(control: Control): { [key: string]: boolean } {
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
            return {
                'username': true
            }
        }

        return null;
    }

    private passwordValidator(control: Control): { [key: string]: boolean } {
        if(!/\s+/g.test(control.value)) {
            return {
                'password': true
            }
        }

        return null;
    }
}
