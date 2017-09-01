import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export default class AuthenticationService {
    userIsloggedIn: EventEmitter<boolean>;

    constructor(
        public  _http: Http,
        private _cookieService: CookieService
    ) {
        this.userIsloggedIn = new EventEmitter();
    }

    login(credentials: any[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const url = '/api/login';
            const body = JSON.stringify(credentials);

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const option  = new RequestOptions({ headers: headers });

            this._http.post(url, body, option)
                .map( response => response.json())
                .subscribe( authResponse => {
                    if(authResponse.hasOwnProperty('token') && authResponse.token) {
                        let domain = 'localhost',
                            today  = new Date(),
                            expiry = new Date(today.getTime() + (60 * 60 * 1000));

                        this.userIsloggedIn.emit(false);
                        this._cookieService.set("gw-token", authResponse.token, expiry, "/", domain);

                        resolve([this.decodeJWT(authResponse.token), false]);
                    } else {
                        this.userIsloggedIn.emit(true);
                        resolve(true);
                    }
                }
            );
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            this._cookieService.delete('gw-token');
            this.userIsloggedIn.emit(false);

            resolve(true);
        });
    }

    decodeJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');

        return JSON.parse(window.atob(base64)));
    }

    getToken() {
        return this._cookieService.get('gw-token');
    }

    isAuthorized(token: any[]): Promise<boolean> {
        return new Promise(resolve => {
            const url = '/api/authenticated';
            const body = JSON.stringify(token);

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const option  = new RequestOptions({ headers: headers });

            this._http.post(url, body, option)
                .map( response => response.json())
                .subscribe( tokenResponse => {
                    resolve(tokenResponse.success);
                }
            );
        });
    }
}
