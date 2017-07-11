import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';

import { Component, OnInit, HostBinding }   from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'pomodoro-timer',
    template: `
        <div>
            <ul>
                <li><a [routerLink]="['widget/1']" routerLinkActive="active">Timer Widget 1</a></li>
            </ul>
            <router-outlet></router-outlet>
        </div>
    `
})
export default class TimerComponent implements OnInit {
    timerID: number;

    constructor(
        //private route: ActivatedRoute,
        //private router: Router
    ) {
        alert(11111);
        /*route.params.subscribe(params => {
            this.courseId = params['id'];

            console.log(this.courseId);
        });*/
    }

    /*ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) => {

            this.timerID = params.get('id');
        });
    }

    gotoHeroes() {
        let timer_ID = this.timerID;

        this.router.navigate(['/task', { id: timer_ID, foo: 'foo' }]);
    }*/
}
