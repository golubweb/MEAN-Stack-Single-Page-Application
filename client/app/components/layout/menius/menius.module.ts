import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';

import MeniusComponent from './menius.component';
import SubMeniusPipe   from './pipes/sub-menius.pipe';

@NgModule({
    imports:      [ CommonModule, RouterModule ],
    declarations: [ MeniusComponent, SubMeniusPipe ],
    providers:    [ ],
    exports:      [ MeniusComponent ]
})
export default class MeniusModule { }
