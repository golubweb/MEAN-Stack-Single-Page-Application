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

    addUser(usarData: any[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const url = '/api/register';
            const body = JSON.stringify(usarData);

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const option  = new RequestOptions({ headers: headers });

            this.http.post(url, body, option)
                .map( response => response.json())
                .subscribe(data => {
                    console.log(data);
                    resolve(data);
            });
        });
    }
}

export default PagesService;
