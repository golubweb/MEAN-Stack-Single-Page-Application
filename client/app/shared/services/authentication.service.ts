import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export default class AuthenticationService {
    cookie: void;
    userIsloggedIn: EventEmitter<boolean>;

    constructor(
        public http: Http,
        private cookieService: CookieService
    ) {
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
                    let userData: any[] = [];
                    let validCredentials: boolean = false;

                    if(authResponse && authResponse.token) {
                        let domain = 'localhost',
                            today  = new Date(),
                            expiry = new Date(today.getTime() + (60 * 60 * 1000));

                        this.cookieService.set("gw-token", authResponse.token, expiry, "/", domain);
                    }

                    this.userIsloggedIn.emit(validCredentials);

                    resolve([this.decodeJWT(authResponse.token), validCredentials]);
                }
            );
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            this.cookieService.delete('gw-token');
            this.userIsloggedIn.emit(false);

            resolve(true);
        });
    }

    decodeJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');

        console.log(JSON.parse(window.atob(base64))));

        return JSON.parse(window.atob(base64)));
    }

    getToken() {
        return this.cookieService.get('gw-token');
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
