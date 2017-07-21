import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';

import { Title } from '@angular/platform-browser';

@Component({
    selector: 'pomodoro-login',
    templateUrl: '/templates/login.component.html'
})
class LoginComponent implements OnInit {
    loginForm;
    notValidCredentials: boolean = false;
    showUsernameHint: boolean = false;

    construtor(
        private router: Router
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

            console.log('username', username.value);
        });
    }


    authenticate(login) {
        console.log('Forma je poslata: ', login);
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
