import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Our first "Hello world" component
@Component({
  selector: 'login-form',
  template: '<h1 class="text-center"> {{greeting}} </h1>'
})
export class LoginFormComponent {
  greeting: string;
  constructor() {
    this.greeting = 'Hello Angular 2!';
  }
}

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [LoginFormComponent],
  bootstrap: [LoginFormComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
