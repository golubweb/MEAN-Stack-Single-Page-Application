import Widgets        from '../interfaces/widgets.interface';
import WidgetsActions from '../actions/widgets.action';

const defaultState: Widgets = {
    recentPosts: [],
    bigBanner: [],
    mediumBanner: [],
    customHtml: [],
    customMenu: [],
    socialMedia: [],
    loading: true
}

export default function widgetReducer(state: Widgets = defaultState, action) {
    switch(action.type) {
        case 'GET_ALL_SUCCESS': {
            return { ...state, data: action.payload };
        }

        case 'GET_ALL_FAIL': {
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
