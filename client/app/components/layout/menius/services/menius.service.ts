import { Observable }                              from 'rxjs/Observable';
import { Injectable, EventEmitter }                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
class MeniusService {
    private headersJson = new Headers({ 'Content-Type': 'application/json' });
    private optionJson  = new RequestOptions({ headers: this.headersJson });

    constructor(
        private http: Http
    ) {}

    getMainMenus(): Observable {
        const url = '/api/main/menius';

        return this.http.get(url, this.optionJson).map((data: Response ) => {
                return data.json();
        });
    }
}

export default MeniusService;
