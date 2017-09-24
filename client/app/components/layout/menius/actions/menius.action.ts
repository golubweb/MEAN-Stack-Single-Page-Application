import { Action } from '@ngrx/store';

import Main    from '../interfaces/main-menius.interface';
import SubMenu from '../interfaces/sub-menius.interface';

export const GET_MENU = 'GET_MENU';

export class setMeniusState implements Action {
    readonly type = GET_MENU;

    constructor(public payload: any) {}
}

export type All = setMeniusState;
