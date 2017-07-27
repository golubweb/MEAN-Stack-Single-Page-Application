import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../shared/shared';

@Component({
    selector: 'pomodoro-task-icons',
    templateUrl: 'templates/task-icons.component.html'
})
class TaskIconsComponent implements OnInit {
    @Input() task: Task;
    @Input() size: number;
    icons: Object[] = [];

    ngOnInit() {
        this.icons.length = this.task.pomodorosRequired;
        this.icons.fill({ name: this.task.name });
    }
}

export default TaskIconsComponent;
