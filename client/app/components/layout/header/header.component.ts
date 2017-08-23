import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import MeniusComponent from '../menius/menius.component';

@Component({
    selector: 'main-header',
    directives: [ MeniusComponent ],
    templateUrl: 'templates/header/header.component.html'
})
class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

export default HeaderComponent;
