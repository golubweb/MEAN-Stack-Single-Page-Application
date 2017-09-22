import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as WidgetsActions from './components/widgets/actions/widgets.action';
import Widgets             from './components/widgets/interfaces/widgets.interface';

interface AppState {
    widgets: Widgets
}

@Component({
    selector:    '[app-root]',
    templateUrl: '/templates/app.component.html'
})
export default class AppComponent implements OnInit {
    widgetsList: Observable<Widgets>;

    constructor(
        private _store: Store<AppState>
    ) {
        this._store.dispatch(new WidgetsActions.DownloadWidget());
    }

    ngOnInit() {
        this.widgetsList = this._store.select('widgets');

        this.widgetsList.subscribe(data => {
            console.log('------------------');
            console.log(data);
            console.log('------------------');
        });
    }
}
