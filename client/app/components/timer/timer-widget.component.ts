import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { SettingsService, TaskService } from '../../shared/shared';

@Component({
    selector: 'pomodoro-timer-widget',
    templateUrl: 'templates/timer-widget.component.html',
    styleUrls:   ['css/timer-widget.component.css']
})
export default class TimerWidgetComponent implements OnInit {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabelKey: string;
    buttonLabelsMap: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private taskService: TaskService,
        private settingsService: SettingsService
    ) {
        this.buttonLabelsMap = settingsService.labelsMap.timer;

        route.params.subscribe(params => {
            let taskIndex = params['id'];

            if(!isNaN(taskIndex)) this.taskName = this.taskService.taskStore[taskIndex].name;
        });
    }

    ngOnInit(): void {

        this.resetPomodoro();

        setInterval(() => this.tick(), 1000);
    }

    resetPomodoro(): void {
        this.isPaused = true;
        this.minutes = this.settingsService.timerMinutes - 1;
        this.seconds = 59;
        this.buttonLabelKey = 'start';
    }

    private tick(): void {
        if (!this.isPaused) {
            this.buttonLabelKey = 'pause';

            if (--this.seconds < 0) {
                this.seconds = 59;

                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
          this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
        }
    }
}
