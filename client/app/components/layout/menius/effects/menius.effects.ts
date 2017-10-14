import { Injectable }      from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action }          from "@ngrx/store";

import MeniusService from '../services/menius.service';
import MeniusActions from '../actions/menius.action';

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
        private _meniusService: MeniusService,
        private _meniusActions: MeniusActions
    ) {}

    @Effect()
    GetMenius$: Observable<Action> = this._actions.ofType('GET_MENIUS')
        .switchMap(action => {
            return this._meniusService.getMenius();
        })
        .map((payload: any) => {
            return this._meniusActions.loadMeniusSuccess(payload);
        })
        .catch(error => of(
            this._meniusActions.loadMeniusFail(error);
        ));
}
