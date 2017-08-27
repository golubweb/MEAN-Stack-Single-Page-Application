import { Observable }                              from 'rxjs/Observable';
import { Injectable, EventEmitter }                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
class PagesService {
    constructor(private http: Http) {}

    getPage(page_id: number): Observable {
        const url = '/api/page/' + page_id;

        const headersType    = new Headers({ 'Content-Type': 'application/json' });
        const requestHeaders = new RequestOptions({ headers: this.headersType });

        return this.http.get(url, requestHeaders).map((data: Response) => {
            let dataPage = data.json();

            return dataPage.data;
        });
    }
}

export default PagesService;
