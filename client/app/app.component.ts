import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import WidgetsService      from './components/layout/widgets/services/widgets.service';
import Widgets             from './components/layout/widgets/interfaces/widgets.interface';
import * as WidgetsActions from './components/layout/widgets/actions/widgets.action';

import MeniusService      from './components/layout/menius/services/menius.service';
import Menius             from './components/layout/menius/interfaces/menius.interface';
import * as MeniusActions from './components/layout/menius/actions/menius.action';

interface AppState {
    widgets: Widgets;
    menius:  Menius;
}

@Component({
    selector:    '[app-root]',
    templateUrl: '/templates/app.component.html'
})
export default class AppComponent implements OnInit {
    meniusList:  Observable<Menius>;
    widgetsList: Observable<Widgets>;

    constructor(
        private _store: Store<AppState>,
        private _widgetsService: WidgetsService,
        private _meniusService:  MeniusService
    ) {
    }

    ngOnInit() {
        this._widgetsService.getAll().subscribe(widgetsData => {
            this._store.dispatch(new WidgetsActions.setWidgetState(widgetsData));
        });

        this._meniusService.getMainMenus().subscribe((meniusData) => {
            this._store.dispatch(new MeniusActions.setMeniusState(meniusData));
        });

        this._store.subscribe(state => {
            console.log(state.widgets)
            //console.log(state.menius);
        });
    }
}
