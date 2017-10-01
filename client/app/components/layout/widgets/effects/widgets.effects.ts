import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";

import WidgetsService from '../services/widgets.service';
import WidgetsActions from '../actions/widgets.action';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/Observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export default class WidgetsEffects {
    constructor(
        private _actions: Actions,
        private _widgetsService: WidgetsService,
        private _widgetsActions: WidgetsActions
    ) {}

    @Effect()
    GetWidgets$: Observable<Action> = this._actions.ofType('GET_ALL')
        .mergeMap(action => {
            return this._widgetsService.getAll();
        })
        .map((payload: any) => {
            return this._widgetsActions.loadWidgetsSuccess(payload);
        })
        .catch(error => of(
            return this._widgetsActions.loadWidgetsFail(error);
        ));
}

