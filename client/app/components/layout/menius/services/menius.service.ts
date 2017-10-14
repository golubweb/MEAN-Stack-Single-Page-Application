import { Observable }                              from 'rxjs/Observable';
import { Injectable, EventEmitter }                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
class MeniusService {
    meniusData: any[] = [];

    private headersJson = new Headers({ 'Content-Type': 'application/json' });
    private optionJson  = new RequestOptions({ headers: this.headersJson });

    constructor(
        private http: Http
    ) {}

    getMenius(): Observable {
        const url = '/api/main/menius';

        return this.http.get(url, this.optionJson).map((data: Response ) => {
            this.meniusData = data.json();

            return this.meniusData.menius;

        });
    }
}

export default MeniusService;
