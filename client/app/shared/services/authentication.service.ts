import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
class AuthenticationService {
    constructor() {}

    login({username, password}): Promise<boolean> {}

    logout(): Promise<boolean> {}

    static isAuthorized(): boolean {}
}

export default AuthenticationService;
