import { Injectable } from '@angular/core';
import { Store }      from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import WidgetsService from '../../components/layout/widgets/services/widgets.service';

@Injectable()
export default class WidgetsResolver implements Resolve<any> {
    widgets: any[];

    constructor(
        private _store: Store<any>,
        private _widgetsService: WidgetsService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return new Promise((resolve, reject) => {
            this._store.subscribe(state => {
                if(state.widgets !== undefined) {
                    resolve(state.widgets.data);
                } else {
                    this._widgetsService.getAll().subscribe(response => {
                        resolve(response);
                    });
                }
            });
        });
    }
}
