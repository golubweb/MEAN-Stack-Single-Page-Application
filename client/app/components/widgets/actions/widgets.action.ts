import { Action } from '@ngrx/store';
import Widgets    from '../interfaces/widgets.interface';

import WidgetsService from '../services/widgets.service';

export const GET_WIDGET = 'GET_WIDGET';

export class DownloadWidget implements Action {
    readonly type = GET_WIDGET;

    constructor(
        public payload: any
    ) {
        let _widgetsService = new WidgetsService();

        console.log(_widgetsService);

        /*var response = _widgetsService.getAll();

        console.log('****************************');
        console.log(response);
        console.log('****************************');

        this.payload = response;*/
    }
}

export type All = DownloadWidget;
