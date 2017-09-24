import { Action } from '@ngrx/store';

import Widgets    from '../interfaces/widgets.interface';

export const GET_WIDGET = 'GET_WIDGET';

export class setWidgetState implements Action {
    readonly type = GET_WIDGET;

    constructor(public payload: any) {}
}

export type All = setWidgetStore;
