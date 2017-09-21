import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: '[app-home-page]',
    templateUrl: 'templates/pages/home-page.component.html'
})
export default class HomePageComponent {
    messages$: Observable<string>;

    constructor(
        private store: Store
    ) {
        //this.messages$ = this.store.select('message');

    }

    spanishMessage() {
        //this.store.dispatch({type: 'SPANISH'});
    }

    franshMessage() {
        //this.store.dispatch({type: 'FRANCH'});
    }
}
