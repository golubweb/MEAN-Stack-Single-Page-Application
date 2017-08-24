import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ControlGroup, Control } from '@angular/forms';

@Component({
    selector:    '[login-widget]',
    templateUrl: 'templates/layout/login-widget.component.html'
})
class LoginWidgetComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

export default LoginWidgetComponent;
