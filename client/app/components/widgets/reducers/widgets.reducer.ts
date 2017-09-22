import * as WidgetsActions from '../actions/widgets.action';
import Widgets             from '../interfaces/widgets.interface';

export type Action = WidgetsActions.All;

const defaultState: Widgets = {
    bigBanner: [],
    mediumBanner: [],
    customHtml: [],
    customMenu: [],
    socialMedia: []
}

let widgetsData = [];

export default function widgetReducer(state: Widgets = defaultState, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case WidgetsActions.GET_WIDGET:
            return {
                ...state,
                widgetsData: action.payload
            }
        default:
            return defaultState;
    }
}
