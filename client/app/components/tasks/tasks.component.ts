import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';

import {
    TaskService,
    SettingsService,
    Task
} from '../../shared/shared';

@Component({
    selector: 'pomodoro-tasks',
    directives: [TaskIconsComponent, TaskTooltipDirective],
    templateUrl: '/templates/tasks.component.html',
    styleUrls: ['/css/tasks.component.css']
})
class TasksComponent implements OnInit {
    today: Date;
    tasks: Task[] = [];
    queuedPomodoros: number;
    queueHeaderMapping: any;
    timerMinutes: number;

    constructor(
        private title: Title,
        private router: Router,
        private taskService: TaskService,
        private settingsService: SettingsService
    ) {

        this.tasks = this.taskService.taskStore;
        this.today = new Date();
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;
    }

    ngOnInit(): void {
        //this.title.setTitle('Task List');
        this.updateQueuedPomodoros();

        this.taskService.taskFeed.subscribe(newTask => {
            this.tasks.push(newTask);
            this.updateQueuedPomodoros();
        });
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void {
        this.queuedPomodoros = this.tasks
            .filter((Task: Task) => Task.queued)
            .reduce((pomodoros: number, queuedTask: Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    }

    workOn(index: number): void {
        this.router.navigate(['/timer/task/' + index]);
    }
};

export default TasksComponent;
