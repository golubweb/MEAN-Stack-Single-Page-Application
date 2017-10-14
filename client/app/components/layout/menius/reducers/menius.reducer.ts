import * as MeniusActions from '../actions/menius.action';

import Main    from '../interfaces/main-menius.interface';
import SubMenu from '../interfaces/sub-menius.interface';
import Third   from '../interfaces/third-menius.interface';

export default function meniusReducer(state, action) {
    switch(action.type) {
        case 'GET_MENIUS_SUCCESS': {
            return { ...state, menius: action.payload };
        }

        case 'GET_MENIUS_FAIL': {
            return Object.assign({}, state, {
                error: action.payload,
                loading: true
            });
        }

        default: {
            return state;
        }
    }
}
