import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';

import PageService from './services/pages.service';

@Component({
    selector:    '[register-page]',
    templateUrl: 'templates/pages/register.component.html'
})
export default class RegisterComponent implements OnInit {
    authorForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private pageService: PageService
    ) {
        this.authorForm = fb.group({
            'name':     [null, Validators.required],
            'lastname': [null, Validators.required],
            'nickname': [null, Validators.required],
            'email':    [null, Validators.required],
            'password': [false, Validators.required]
        });
    }

    ngOnInit() {

    }

    private saveAuthor(formValue) {
        this.pageService.addUser(formValue).then((response)=> {
            console.log(response);
        });
    }
}
