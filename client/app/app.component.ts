import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as WidgetsActions from './components/widgets/actions/widgets.action';
import Widgets             from './components/widgets/interfaces/widgets.interface';

import WidgetsService from './components/widgets/services/widgets.service';

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
        private _store: Store<AppState>,
        private _widgetsService: WidgetsService
    ) {
        this._widgetsService.getAll().subscribe(response => {
            this._store.dispatch(new WidgetsActions.DownloadWidget(response));
        });
    }

    ngOnInit() {
        this.fetchWidgets();
    }

    private fetchWidgets(): void {
        this._store.select('widgets').subscribe(respose => {
            this.widgetsList = respose;
        });
    }
}
