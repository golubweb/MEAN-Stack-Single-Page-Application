import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../shared/shared';

@Component({
    selector: 'pomodoro-timer-widget',
    templateUrl: '/templates/timer-widget.component.html'
})
export default class TimerWidgetComponent {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabelKey: string;
    buttonLabelsMap: any;

    constructor(private settingsService: SettingsService) {
        this.buttonLabelsMap = settingsService.labelsMap.timer;
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
