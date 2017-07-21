import { Component } from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: '/templates/app.component.html',
    styles: [`
        .navbar-nav .active {
            font-weight: bold;
            border-bottom: 2px solid #d9534f
        }
    `]
})
export default class AppComponent {}
