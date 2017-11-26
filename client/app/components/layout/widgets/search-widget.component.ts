import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import WidgetsService from './services/widgets.service';

@Component({
    selector:    '[app-search-widget]',
    templateUrl: '/templates/widgets/search-widget.component.html'
})
export default class SearchWidgetComponent {
    searchForm:    FormGroup;
    showInputHint: boolean;
    successMsg:    String;
    errorField:    String;

    constructor(
        private _fb: FormBuilder,
        private _widgetsService: WidgetsService
    ) {
        this.searchForm = this._fb.group({
            search:    [ '', [ Validators.required, this.textValidator] ],
            paremType: [ '', Validators.required ],
        });

        this.searchForm.controls['search'].valueChanges.subscribe(value => this.showInputHint = this.textValidator(value));
    }

    private textValidator(velue: string): boolean {
        return (/^[^;]{3,30}$/.test(velue)) ? false : true;
    }

    private sendSearchParams(formValue) {
        if(this.searchForm.dirty && this.searchForm.valid) {
            this._widgetsService.getSearchData(formValue).subscribe((response) => {
                if(response.success) {
                    console.log('SUCCESS: ', response.success);
                } else {
                    console.log('ERR: ', response);
                }
            });
        }
    }
}
