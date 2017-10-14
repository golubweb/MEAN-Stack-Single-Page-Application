import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Store } from '@ngrx/store';

interface AppState {
    widgets: Widgets;
    menius:  Menius;
}

@Component({
    selector:    '[app-root]',
    templateUrl: '/templates/app.component.html'
})
export default class AppComponent {
    constructor(
        private _store: Store<AppState>
    ) {
        this._store.dispatch({type: 'GET_ALL'}));
        this._store.dispatch({type: 'GET_MENIUS'}));
    }
}
