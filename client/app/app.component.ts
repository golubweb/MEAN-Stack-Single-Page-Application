import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import WidgetsService     from './components/layout/widgets/services/widgets.service';
import Widgets            from './components/layout/widgets/interfaces/widgets.interface';
import WidgetsActions     from './components/layout/widgets/actions/widgets.action';

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
    constructor(
        private _store: Store<AppState>,
        private _widgetsService: WidgetsService,
        private _meniusService:  MeniusService,
        private _widgetsActions: WidgetsActions
    ) {
        this._store.dispatch({type: 'GET_ALL'}));
    }

    ngOnInit() {
        this._meniusService.getMainMenus().subscribe((meniusData) => {
            console.log(meniusData);
            this._store.dispatch(new MeniusActions.setMeniusState(meniusData));
        });
    }
}
