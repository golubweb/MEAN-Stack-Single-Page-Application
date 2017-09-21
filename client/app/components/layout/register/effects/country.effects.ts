import { Injectable }      from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/Observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as CountryActions from '../actions/country.action';
export type Action = CountryActions.All;

@Injectable()
export class CountryEffects {
    constructor(private _actions: Actions) {}

    @Effect()
    GetCountry: Observable<Action> = this._actions.ofType(CountryActions.SET_COUNTRY)
        .map((action: CountryActions.GetCountry) => {
            action.payload

            console.log('ACTION PAYLOAD: ', action.payload);
        })
        .mergeMap(payload => {
            console.log('MERGE PAYLOAD: ', payload);
        })
        .map(category => {
            console.log('COUNTRY: ', category);
            //return new CountryActions.GetCountrySuccess(category);
        })
}

