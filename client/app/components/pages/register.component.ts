import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';

import PageService from './services/pages.service';

@Component({
    selector:    '[app-register-page]',
    templateUrl: 'templates/pages/register.component.html'
})
export default class RegisterComponent implements OnInit {
    authorForm: FormGroup;
    errorMsg: String;
    errorDisplay: Boolean = true;
    successMsg: String;
    errorField: String;

    constructor(
        private fb: FormBuilder,
        private pageService: PageService
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
        this.pageService.addUser(formValue).then((response)=> {
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
