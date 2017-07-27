import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router } from '@angular/router';

@Injectable()
export default class AuthEditor implements CanActivate {

    runCanActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return false;
    }
}
