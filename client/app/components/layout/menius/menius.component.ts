import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import MeniusService from './services/menius.service';
import SubMeniusPipe from './pipes/sub-menius.pipe';

import MainMenius    from './interfaces/main-menius.interface';
import SubMenius     from './interfaces/sub-menius.interface';

@Component({
    selector:    'nav-menu',
    templateUrl: 'templates/common/menius.component.html'
})
class MeniusComponent {
    mainMenu: MainMenius[] = [];
    subMenu:  SubMenius[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private meniusService: MeniusService
    ) {
        meniusService.getMainMenus().subscribe((data) => {
            this.mainMenu = data.menius;
            this.subMenu  = data.subMenius;
        });
    }
}

export default MeniusComponent;
