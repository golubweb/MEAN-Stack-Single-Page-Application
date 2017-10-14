import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export default class MeniusActions implements Action {
    static GET_MENIUS = 'GET_MENIUS';

    public loadMenius(): Action {
        return {
            type: MeniusActions.GET_MENIUS
        };
    }

    static GET_MENIUS_SUCCESS = 'GET_MENIUS_SUCCESS';

    public loadMeniusSuccess(data): Action {
        return {
            type: MeniusActions.GET_MENIUS_SUCCESS,
            payload: data
        };
    }

    static GET_MENIUS_FAIL = 'GET_MENIUS_FAIL';

    public loadMeniusFail(error): Action {
        return {
            type: MeniusActions.GET_MENIUS_FAIL,
            payload: error
        };
    }
}
