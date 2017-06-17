import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Our first "Hello world" component
@Component({
	selector: 'login-form',
	styleUrls: ['./client/public/css/style.css'],
    templateUrl: './client/public/template/login.html'
})
export class LoginFormComponent {
	greeting: string;
	constructor() {
		this.greeting = 'Hello Angular 4!';
	}
}

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
	imports: [BrowserModule],
	declarations: [LoginFormComponent],
	bootstrap: [LoginFormComponent]
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
