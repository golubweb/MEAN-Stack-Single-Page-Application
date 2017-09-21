import * as CountryActions from '../actions/country.action';
import Country             from '../interfaces/country.interface';

export type Action = CountryActions.All;

var stateInit: any[] = {
    userCountry: []
};

export function CountryReducer(state: stateInit, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case CountryActions.SET_COUNTRY:
            return {
                ...state,
                userCountry: action.payload
                loading: true
            };

        default:
            return state;
    }
}
