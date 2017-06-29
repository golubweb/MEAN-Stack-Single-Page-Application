import { Pipe, PipeTransform } from '@angular/core';
import { Queueable } from '../shared';

@Pipe({
    name: 'pomodoroQueuedOnly',
    pure: false
})
export default class QueuedOnlyPipe implements PipeTransform {
    transform(tasks: Task[], ...args: any[]): Task[] {

        return tasks.filter((task: Task) => {
            return task.queued === args[0];
        });
    }
}
