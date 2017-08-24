import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateYear'
})
export default class DateYearPipe implements PipeTransform {
    transform(postDate: string): string {
        let date = new Date(postDate),
            year = date.getFullYear();

        return year;
    }
}
