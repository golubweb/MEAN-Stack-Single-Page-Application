import * as MeniusActions from '../actions/menius.action';

import Main    from '../interfaces/main-menius.interface';
import SubMenu from '../interfaces/sub-menius.interface';
import Third   from '../interfaces/third-menius.interface';

export type Action = MeniusActions.All;

const defaultState = {
    menius: [],
    subMenius: [],
    thirdMenius: []
}

export default function widgetReducer(state: Widgets = defaultState, action: Action) {
    switch(action.type) {
        case MeniusActions.GET_MENU: {
            return { data: action.payload };
        }

        default: {
            return { data: state };
        }
    }
}
