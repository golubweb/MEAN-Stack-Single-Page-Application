import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';

@Injectable()
export default class WidgetsActions implements Action {
    static GET_ALL = 'GET_ALL';

    public loadBlogs(): Action {
        return {
            type: WidgetsActions.GET_ALL
        };
    }

    static GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';

    public loadWidgetsSuccess(data): Action {
        return {
            type: WidgetsActions.GET_ALL_SUCCESS,
            payload: data
        };
    }

    static GET_ALL_FAIL = 'GET_ALL_FAIL';

    public loadWidgetsFail(error): Action {
        return {
            type: WidgetsActions.GET_ALL_FAIL,
            payload: error
        };
    }
}
