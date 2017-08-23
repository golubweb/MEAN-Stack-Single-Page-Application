import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateMonth'
})
export default class DateMonthPipe implements PipeTransform {
    transform(postDate: string): string {
        let month: string;

        let date = new Date(postDate),
            month = date.toLocaleString('en-us', { month: 'short' });

        return month;
    }
}
