import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class AuthenticationService {
    userIsloggedIn: EventEmitter<boolean>;

    constructor(public http: Http) {
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

                        window.sessionStorage.setItem('pm-token', authResponse.token);
                    }

                    this.userIsloggedIn.emit(validCredentials);
                    resolve(validCredentials);
                }
            );
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            window.sessionStorage.removeItem('pm-token');
            this.userIsloggedIn.emit(false);

            resolve(true);
        });
    }

    getToken() {
        return window.sessionStorage.getItem('pm-token');
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
