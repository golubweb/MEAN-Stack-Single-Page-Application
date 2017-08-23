import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'subMenius',
    pure: false
})
export default class SubMeniusPipe implements PipeTransform {
    transform(subItem: any[], ...args: any[]): any {
        return subItem.filter((item: any) => {
            return item.parent === args[0];
        });
    }
}
