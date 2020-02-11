import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-root',
    template: `<div>
    <h1>{{ title }}</h1>
    <hr>
    <p>Powered by Angular 9</p>
    </div>`
})
class HelloComponent {

    title: string;

    constructor() {
        this.title  = 'Hello, World!';
    }
}

//-------------- end of component 

@NgModule({
    declarations: [
        // list of all components, directives and pipes
        HelloComponent
    ],
    imports: [
        // list of all other modules that your module depends on
        BrowserModule
    ],
    providers: [
        // list of all services (injectables)
    ],
    bootstrap: [
        HelloComponent
    ]
})
class MyApp {}

// --------------- end of MyApp ng-module

// instruct angular to bootstrap one of our module (AppModule)

platformBrowserDynamic().bootstrapModule(MyApp)