import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import HeaderComponent from '../layout/header/header.component';

@Component({
    selector: 'home-page',
    templateUrl: 'templates/pages/home-page.component.html'
})
class HomePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

export default HomePageComponent;
