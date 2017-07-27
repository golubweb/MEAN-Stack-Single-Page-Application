import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../shared/shared';

@Component({
    selector: 'pomodoro-login',
    templateUrl: 'templates/login/login.component.html'
})
class LoginComponent implements OnInit {
    loginForm;
    notValidCredentials: boolean = false;
    showUsernameHint: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required, this.emailValidator])),
            password: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(25)
                ]
            ))
        });

        const username = this.loginForm.controls['username'];
        username.valueChanges.subscribe(value => {
            this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
        });
    }

    authenticate() {
        let credentials: any = this.loginForm.value;
        this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

        this.authenticationService.login(credentials).then(success => {
            if (success) {
                this.router.navigate(['/tasks']);
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
}

export default LoginComponent;
