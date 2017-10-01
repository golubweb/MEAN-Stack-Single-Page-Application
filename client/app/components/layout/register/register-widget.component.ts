import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Router }     from '@angular/router';

import { AuthenticationService, CountryService } from '../../../shared/shared';

import * as CountryActions from './actions/country.action';
import Country             from './interfaces/country.interface';

@Component({
    selector:    '[app-register-widget]',
    templateUrl: 'templates/layout/register-widget.component.html'
})
export default class RegisterWidgetComponent implements OnInit {
    authorForm: FormGroup;
    errorMsg:   String;
    successMsg: String;
    errorField: String;
    errorDisplay:      Boolean = true;
    showNameHint:      Boolean = false;
    showLastnameHint:  Boolean = false;
    showNicknameHint:  Boolean = false;
    showPhoneHint:     Boolean = false;
    showCountryHint:   Boolean = false;
    showEmailHint:     Boolean = false;
    showPasswordlHint: Boolean = false;

    countries$: Observable<Country> = [];

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthenticationService,
        private _countryService: CountryService
    ) {
        this._countryService.getCountries().subscribe(data => {
            this.countries$ = data;
        });
    }

    ngOnInit() {
        this.authorForm = this._fb.group({
            name:     ['', [Validators.required, this.wordValidator]],
            lastname: ['', [Validators.required, this.wordValidator]],
            nickname: ['', [Validators.required, this.wordValidator]],
            phone:    ['', [Validators.required, this.phoneValidator]],
            country:  ['', [Validators.required, this.countryValidator]],
            email:    ['', [Validators.required, this.emailValidator]],
            password: ['', [Validators.required, this.passwordValidator]]
        });

        let name     = this.authorForm.controls['name'];
        let lastname = this.authorForm.controls['lastname'];
        let nickname = this.authorForm.controls['nickname'];
        let phone    = this.authorForm.controls['phone'];
        let country  = this.authorForm.controls['country'];
        let email    = this.authorForm.controls['email'];
        let password = this.authorForm.controls['password'];

        name.valueChanges.subscribe(value => this.showNameHint = this.wordValidator(value));
        lastname.valueChanges.subscribe(value => this.showLastnameHint = this.wordValidator(value));
        nickname.valueChanges.subscribe(value => this.showNicknameHint = this.wordValidator(value));
        phone.valueChanges.subscribe(value => this.showPhoneHint = this.phoneValidator(value));
        country.valueChanges.subscribe(value => this.showCountryHint = this.countryValidator(value));
        email.valueChanges.subscribe(value => this.showEmailHint = this.emailValidator(value));
        password.valueChanges.subscribe(value => this.showPasswordlHint = this.passwordValidator(value));
    }


    private wordValidator(value: string): boolean {
        return (/^.{3,40}$/.test(value)) ? false : true;
    }

    private wordLongValidator(value: string): boolean {
        return (/^.{7,40}$/.test(value)) ? false : true;
    }

    private phoneValidator(value: string): boolean {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) ? false : true;
    }

    private countryValidator(value: string): boolean {
        return (/^.{2,4}$/.test(value)) ? false : true;
    }

    private emailValidator(velue: string): boolean {
        return (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(velue)) ? false : true;
    }

    private passwordValidator(value: string): boolean {
        return (/^.{7,100}$/.test(value)) ? false : true;
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
                }
            });
        }
    }
}
