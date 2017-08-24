import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../../shared/shared';

@Component({
    selector:    '[login-widget]',
    templateUrl: 'templates/layout/login-widget.component.html'
})
class LoginWidgetComponent implements OnInit {
    loginForm;
    notValidCredentials: boolean = false;
    showUsernameHint:    boolean = false;
    showPasswordHint:    boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    this.emailValidator
                ]
            )),
            password: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(15),
                    this.passwordValidator
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

        this.authenticationService.login(credentials).then(success => {
            if (success) {
                this.router.navigate(['page/home-page']);
            } else {
                this.notValidCredentials = true;
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

export default LoginWidgetComponent;
