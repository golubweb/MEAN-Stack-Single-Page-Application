import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import WidgetsService from './services/widgets.service';

@Component({
    selector:    '[app-newsletters-widget]',
    templateUrl: '/templates/widgets/newsletters-widget.component.html'
})
export default class NewslettersWidgetComponent implements OnInit {
    newslettersForm: FormGroup;
    showEmailHint:   Boolean = false;
    errorDisplay:    Boolean = false;
    successMsg: String;
    errorField: String;

    constructor(
        private _fb: FormBuilder,
        private _widgetsService: WidgetsService
    ) {
        this.newslettersForm = this._fb.group({
            email: ['', [Validators.required, this.emailValidator]]
        });

        this.newslettersForm.controls['email'].valueChanges.subscribe(value => this.showEmailHint = this.emailValidator(value));
    }

    private emailValidator(velue: string): boolean {
        return (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(velue)) ? false : true;
    }

    private sendNewsletters(formValue) {
        if (this.newslettersForm.dirty && this.newslettersForm.valid) {
            this._widgetsService.sendNewsletters(formValue).subscribe((response)=> {
                if(response.success) {
                    this.successMsg   = response.msg;
                    this.errorDisplay = response.success;
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
