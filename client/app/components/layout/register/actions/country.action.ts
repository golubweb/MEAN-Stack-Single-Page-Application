import { Action } from '@ngrx/store';
import Country    from '../interfaces/country.interface';

export const SET_COUNTRY = 'SET_COUNTRY';

export class SetCountry implements Action {
    readonly type = SET_COUNTRY;

    constructor(public payload: String) {
        console.log('GET_COUNTRY --> ', payload);
    }
}

export type All
    = GetCountry
    | GetCountrySuccess;
