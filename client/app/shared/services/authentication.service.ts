import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { CookieService } from '../shared';

@Injectable()
export default class AuthenticationService {
    cookie: void;
    userIsloggedIn: EventEmitter<boolean>;

    constructor(public http: Http) {
        this.cookie = new CookieService();
        this.userIsloggedIn = new EventEmitter();
    }

    login(credentials: any[]): Promise<boolean> {
        return new Promise(resolve => {
            const url = '/api/login';
            const body = JSON.stringify(credentials);

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const option  = new RequestOptions({ headers: headers });

            this.http.post(url, body, option)
                .map( response => response.json())
                .subscribe( authResponse => {
                    let validCredentials: boolean = false;

                    if(authResponse && authResponse.token) {
                        validCredentials = true;

                        let domain = 'localhost',
                            today  = new Date(),
                            expiry = new Date(today.getTime() + (60 * 60 * 1000));

                        this.cookie.setItem("pm-token", authResponse.token, expiry, "/", domain, null);
                    }

                    this.userIsloggedIn.emit(validCredentials);

                    resolve(validCredentials);
                }
            );
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            this.cookie.removeItem('pm-token');
            this.userIsloggedIn.emit(false);

            resolve(true);
        });
    }

    getToken() {
        return this.cookie.getItem('pm-token');
    }

    isAuthorized(token: any[]): Promise<boolean> {
        return new Promise(resolve => {
            const url = '/api/authenticated';
            const body = JSON.stringify(token);

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const option  = new RequestOptions({ headers: headers });

            this.http.post(url, body, option)
                .map( response => response.json())
                .subscribe( tokenResponse => {
                    resolve(tokenResponse.success);
                }
            );
        });
    }
}
