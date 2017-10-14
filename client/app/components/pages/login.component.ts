import { Component, OnInit }      from '@angular/core';
import { CanActivate, CanDeactivate, OnDeactivate, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:    '[app-login-page]',
    templateUrl: 'templates/pages/login.component.html'
})
export default class LoginComponent {
    widgets:  any[] = [];

    constructor(private _route: ActivatedRoute) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }
}
