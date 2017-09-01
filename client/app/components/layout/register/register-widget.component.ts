import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

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
        private _fb: FormBuilder,
        private _authService: AuthenticationService
    ) {

        this.authorForm = _fb.group({
            name:     ['', [Validators.required, Validators.pattern(/^[^;]{2,30}$/)]],
            lastname: ['', [Validators.required, Validators.pattern(/^[^;]{2,30}$/)]],
            nickname: ['', [Validators.required, Validators.pattern(/^[^;]{2,30}$/)]],
            phone:    ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
            country:  ['', [Validators.required, Validators.pattern(/^[^;]+$/)]],
            email:    ['', [Validators.required, Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)]],
            password: ['', [Validators.required, Validators.pattern(/^.{7,40}$/)]]
        });
    }

    private saveAuthor(formValue) {
        if (this.authorForm.dirty && this.authorForm.valid) {
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
}
