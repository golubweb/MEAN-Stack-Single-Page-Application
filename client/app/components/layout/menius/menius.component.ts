import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store }                  from '@ngrx/store';

import SubMeniusPipe from './pipes/sub-menius.pipe';

import Main   from './interfaces/main-menius.interface';
import Second from './interfaces/sub-menius.interface';
import Third  from './interfaces/third-menius.interface';

@Component({
    selector:    '[app-nav-menu]',
    templateUrl: 'templates/common/menius.component.html'
})
class MeniusComponent {
    mainMenu:    MainMenius[] = [];
    subMenu:     Second[] = [];
    thirdMenius: Third = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _store: Store
    ) {
        this._store.select('menius').subscribe((response) => {
            this.mainMenu =    response.menius;
            this.subMenu  =    response.subMenius;
            this.thirdMenius = response.thirdMenius;
        });
    }
}

export default MeniusComponent;
