import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateConvert'
})
export default class DateConvertPipe implements PipeTransform {
    transform(postDate: string): string {
        let date  = new Date(postDate),
            day   = date.getDate(),
            year  = date.getFullYear(),
            month = date.getMonth();

         return `${day}/${month}/${year}`;
    }
}
