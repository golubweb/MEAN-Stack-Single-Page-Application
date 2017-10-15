import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import WidgetsService from './services/widgets.service';

@Component({
    selector:    '[app-contact-widget]',
    templateUrl: '/templates/widgets/contactus-widget.component.html'
})
export default class ContactUsWidgetComponent implements OnInit {
    contactForm: FormGroup;
    showTitleHint:   Boolean = false;
    showEmailHint:   Boolean = false;
    showContentHint: Boolean = false;
    successMsg: String;
    errorField: String;

    constructor(
        private _fb: FormBuilder,
        private _widgetsService: WidgetsService
    ) {}

    ngOnInit() {
        this.contactForm = this._fb.group({
            title:   ['', [Validators.required, this.titleValidator]],
            email:   ['', [Validators.required, this.emailValidator]],
            content: ['', [Validators.required, this.contentValidator]]
        });

        let title   = this.contactForm.controls['title'];
        let email   = this.contactForm.controls['email'];
        let content = this.contactForm.controls['content'];

        title.valueChanges.subscribe(value => this.showTitleHint = this.titleValidator(value));
        email.valueChanges.subscribe(value => this.showEmailHint = this.emailValidator(value));
        content.valueChanges.subscribe(value => this.showContentHint = this.contentValidator(value));
    }

    private titleValidator(value: string): boolean {
        return (/^.{3,40}$/.test(value)) ? false : true;
    }

    private emailValidator(velue: string): boolean {
        return (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(velue)) ? false : true;
    }

    private contentValidator(value: string): boolean {
        return (/^.{10,140}$/.test(value)) ? false : true;
    }

    private sendContact(formValue) {
        if (this.contactForm.dirty && this.contactForm.valid) {
            this._widgetsService.sendContact(formValue).subscribe((response)=> {
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
