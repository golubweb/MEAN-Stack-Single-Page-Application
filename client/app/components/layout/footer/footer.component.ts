import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'main-footer',
    directives: [ MeniusComponent ],
    templateUrl: 'templates/footer/footer.component.html'
})
class FooterComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

export default FooterComponent;
