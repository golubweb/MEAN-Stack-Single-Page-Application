import * as WidgetsActions from '../actions/widgets.action';
import Widgets             from '../interfaces/widgets.interface';

export type Action = WidgetsActions.All;

const defaultState: Widgets = {
    recentPost: [],
    bigBanner: [],
    mediumBanner: [],
    customHtml: [],
    customMenu: [],
    socialMedia: []
}

export default function widgetReducer(state: Widgets = defaultState, action: Action) {
    console.log(action);

    switch(action.type) {
        case WidgetsActions.GET_WIDGET: {
            return Object.assign({}, state, {
                recentPosts:  action.payload.recentPosts,
                bigBanner:    action.payload.bigBanner,
                mediumBanner: action.payload.mediumBanner,
                customHtml:   action.payload.customHtml,
                customMenu:   action.payload.customMenu,
                socialMedia:  action.payload.socialMedia
            });
        }
        default: {
            return state;
        }
    }
}
