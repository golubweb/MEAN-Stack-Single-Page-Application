import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';

@Component({
    selector:    '[app-register-page]',
    templateUrl: 'templates/pages/register.component.html'
})
export default class RegisterComponent {
    widgets:  any[] = [];

    constructor(private _route: ActivatedRoute) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }
}
