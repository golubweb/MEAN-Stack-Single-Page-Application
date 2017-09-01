import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';
import { Router }        from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthenticationService } from '../../../shared/shared';

@Component({
    selector:    '[app-register-widget]',
    templateUrl: 'templates/layout/register-widget.component.html'
})
export default class RegisterWidgetComponent implements OnInit {
    authorForm: FormGroup;
    errorMsg: String;
    errorDisplay: Boolean = true;
    successMsg: String;
    errorField: String;

    constructor(
        private fb: FormBuilder,
        private _authService: AuthenticationService
    ) {
        this.authorForm = fb.group({
            'name':     [null,  Validators.required],
            'lastname': [null,  Validators.required],
            'nickname': [null,  Validators.required],
            'email':    [null,  Validators.required],
            'password': [false, Validators.required]
        });
    }

    ngOnInit() {}

    private saveAuthor(formValue) {
        this._authService.registerAuthor(formValue).then((response)=> {
            if(response.success) {
                this.successMsg = response.msg;
            } else {
                let errorObj = JSON.parse(response.error);

                this.errorField   = errorObj.field;
                this.errorMsg     = errorObj.msg;
                this.errorDisplay = response.success;

                console.log(this.errorField);
                console.log(this.errorMsg);
                console.log(this.errorDisplay);
            }
        });
    }
}
